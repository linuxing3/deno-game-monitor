// deno-lint-ignore-file
import Denomander from "https://deno.land/x/denomander/mod.ts";
import { writeJsonSync } from "https://deno.land/std/fs/mod.ts";
import {
  readCSVObjects,
  readCSV,
  writeCSV,
} from "https://deno.land/x/csv/mod.ts";

interface ILog {
  name: string;
  description?: string;
  pid: string;
  timestramp?: string;
}

const token = Deno.env.toObject()["LOGGER_REST_TOKEN"] ||
  "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Inhpbmd3ZW5qdSIsImVtYWlsIjoieGluZ3dlbmp1QGdtYWlsLmNvbSJ9.auCidFeJ7foumlVGCws7Aqlzk-RpqLlhO9NcHmzXpbI";
const baseURL = `http://xunqinji.top:9007/api/v1/games`;

/**
 * post数据
 *
 * @param {string} [url=""] 请求地址
 * @param {*} [data={}] 数据
 * @returns {Promise<any>} 返回异步响应
 */
async function postData(url = "", data = {}): Promise<any> {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      "Authorization": token,
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

/**
 * 显示子进程的输出和错误，并返回进程的返回吗
 *
 * @param {*} p 进程
 * @param {string} filePath 输出文件位置
 * @returns {number} 返回码
 */
async function processStatus(p: any, filePath?: string) {
  const { code } = await p.status();
  if (code === 0) {
    const rawOutput = await p.output();
    await Deno.stdout.write(rawOutput);
    if (filePath) {
      await Deno.writeTextFile(
        filePath,
        new TextDecoder("utf-8").decode(rawOutput),
      );
    }
  } else {
    const rawError = await p.stderrOutput();
    const errorString = new TextDecoder("utf-8").decode(rawError);
    console.log(errorString);
  }
}

/**
 * 列出所有的任务
 *
 * @param {string} filePath 拟写入文件路径csv或table格式，不带扩展名，默认/tmp/games
 * @param {string} format 格式csv或txt
 */
async function taskListAll(filePath: string, format: string) {
  // How to fix locale issue
  const p = Deno.run({
    cmd: [
      "tasklist.exe",
      "/FO",
      format,
    ],
    stdout: "piped",
    stderr: "piped",
  });

  await processStatus(p, filePath);
  const { code } = await p.status();
  Deno.exit(code);
}

/**
 * 杀死所有进程
 *
 * @param {any[]} process 进程数据
 */
async function taskKillAll(process: any[]) {
  process.forEach(async (p) => {
    await taskKill(p["PID"]);
  });
}

/**
 * 终止进程
 *
 * @param {string} pid 进程id
 */
async function taskKill(pid: string) {
  const p = Deno.run({
    cmd: [
      "taskkill.exe",
      "/PID",
      pid,
    ],
    stdout: "piped",
    stderr: "piped",
  });
  await processStatus(p);
  const { code } = await p.status();
  Deno.exit(code);
}

/**
 * csv读取和写入的配置选项
 *
 * @param {string} filePath 文件路径
 * @returns
 */
function getOptions(filePath: string) {
  let options = {};
  if (filePath.split(".")[1] === "csv") {
    options = {
      columnSeparator: ",",
      lineSeparator: "\r\n",
    };
  } else {
    options = {
      columnSeparator: "\t",
      lineSeparator: "\r\n",
    };
  }
  return options;
}

/**
 * 读取日志文件，按关键词筛选并输出
 *
 * @param {string} keyword 关键词用于过滤内容
 * @param {string} filePath 文件路径,默认/tmp/games
 * @param {string} format 文件类型,默认csv
 * @returns {Promise<array>} 过滤后的数组
 */
async function filterLogWithKeyword(
  keyword: string,
  filePath: string,
  format: string = "csv",
): Promise<any[]> {
  // 读取csv更改第一行标题
  await changeCSVHeaer(filePath, format);

  // 已对象格式读取csv文件
  let options = getOptions(filePath + "." + format);
  let result: any[] = [];
  let pattern = new RegExp(keyword);
  const f = await Deno.open(filePath + "." + format);
  for await (const obj of readCSVObjects(f, options)) {
    if (pattern.test(obj["Image Name"])) {
      result.push(obj);
    }
  }
  f.close();

  return new Promise((resolve) => resolve(result));
}

/**
 * 修改csv文件的标题行，避免字符集导致的乱码问题
 *
 * @param {string} filePath 文件路径, 默认/tmp/games, 输出为/tmp/games.csv
 */
async function changeCSVHeaer(filePath: string, format: string = "csv") {
  // FIXED 奇葩bug，这里的字符串不能有空格，否则csv读取器会报错
  const header = '"Image Name","PID","Session Name","Session#","Mem Usage"';
  const inFileText: string = await Deno.readTextFile(filePath);
  const [_, ...rest] = inFileText.split("\r\n");
  const outFileText = [header, ...rest].join("\r\n");
  await Deno.writeTextFile(filePath + "." + format, outFileText);
  console.log("Changed Headers with English!");
}

/**
 * 放弃：修改csv文件的标题行，避免字符集导致的乱码问题
 * 但是写入后的文件格式缺少双引号，不符合要求
 * @param {string} filePath
 */
async function changeCSVHeaerHarder(filePath: string) {
  // FIXEME make sure the header is corret
  const header = ["Image Name", "PID", "Session Name", "Session#", "Mem Usage"];
  let result = [header];
  let options = getOptions(filePath);

  const inFile = await Deno.open(filePath);
  for await (const row of readCSV(inFile, options)) {
    let newRow = [];
    for await (const cell of row) {
      console.log(cell);
      newRow.push(String(cell));
    }
    result.push(newRow);
  }

  const outFile = await Deno.open(
    filePath + ".csv",
    { write: true, create: true },
  );
  await writeCSV(outFile, result, options);

  inFile.close();
  outFile.close();
}

/**
 * 将记录发送到网络Api
 *
 * @param {string} url 网络请求地址
 * @param {any[]} data 数据
 */
async function sendTextLog(url: string, data: any[]) {
  // remote post to api server
  data.forEach(async (d) => {
    const game = {
      name: d["Image Name"],
      description: d["Session Name"],
      pid: d["PID"],
    };
    console.log(game);
    const response = await postData(url, game);
    console.table(response);
  });
}

/**
 * 创建json格式的日志
 *
 * @param {string} filePath 文件路径
 * @param {any[]} data 数据
 */
async function createJsonLog(filePath: string, data: any[]) {
  writeJsonSync(filePath + ".json", data, { spaces: 2 });
}

/**
 * 创建仅包含pid的文件，方便bash下使用
 *
 * @param {string} filePath 文件路径
 * @param {any[]} data 数据
 */
async function createPidOnlyLog(filePath: string, data: any[]) {
  const content = data.map((p) => p["PID"]);
  console.log(content);
  await Deno.writeTextFile(filePath + ".pids", content.join("\n"));
}

// Start the command line program
const program = new Denomander({
  app_name: "Log App",
  app_description: "Create Log in csv, json format from the command-line",
  app_version: "1.0.0",
});

program
  .command("log [file]")
  .option("-f --format", "File format")
  .description("log -f csv /tmp/games | log -f table /tmp/games")
  .action(async ({ file }: { file: string }) => {
    console.log(`Save all process  to ${file} as ${program.format}`);
    await taskListAll(file, program.format);
  });

program
  .command("filter [file]")
  .option("-f --format", "File format")
  .option("-k --keyword", "Query keyword")
  .description("filter -f csv -k Code.exe /tmp/games")
  .action(async ({ file }: { file: string }) => {
    const data = await filterLogWithKeyword(
      program.keyword,
      file,
      program.format,
    );
    console.log(`Show all process of ${program.keyword}`);
    console.log(data);
  });

program
  .command("json [file]")
  .option("-f --format", "File format")
  .option("-k --keyword", "Query keyword")
  .description("json -f csv -k Code.exe /tmp/games")
  .action(async ({ file }: { file: string }) => {
    const data = await filterLogWithKeyword(
      program.keyword,
      file,
      program.format,
    );
    console.log(`Write JSON of all process of ${program.keyword}`);
    console.log(data);
    await createJsonLog(file, data);
  });

program
  .command("pids [file] ")
  .option("-f --format", "File format")
  .option("-k --keyword", "Query keyword")
  .description("pids -f csv -k Code.exe /tmp/games")
  .action(async ({ file }: { file: string }) => {
    const data = await filterLogWithKeyword(
      program.keyword,
      file,
      program.format,
    );
    console.log(`Savel all pid of process of ${program.keyword}`);
    console.log(data);
    await createPidOnlyLog(file, data);
  });

program
  .command("send [file]")
  .option("-f --format", "File format")
  .option("-k --keyword", "Query keyword")
  .description("send -k Code.exe -f csv /tmp/games")
  .action(async ({ file }: { file: string }) => {
    const data = await filterLogWithKeyword(
      program.keyword,
      file,
      program.format,
    );
    console.log(`Send all process of ${program.keyword}  to api server`);
    console.log(data);
    await sendTextLog(baseURL, data);
  });

program
  .command("kill [file]")
  .option("-f --format", "File format")
  .option("-k --keyword", "Query keyword")
  .description("kill -k Code.exe -f csv /tmp/games")
  .action(async ({ file }: { file: string }) => {
    const data = await filterLogWithKeyword(
      program.keyword,
      file,
      program.format,
    );
    console.log(`Danger! Kill all process of ${program.keyword}`);
    console.log(data);
    await taskKillAll(data);
  });

program.parse(Deno.args);
