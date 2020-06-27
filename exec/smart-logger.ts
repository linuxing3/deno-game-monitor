// deno-lint-ignore-file
import { exec, OutputMode } from "https://deno.land/x/exec/mod.ts";
import Denomander from "https://deno.land/x/denomander/mod.ts";
import { writeJsonSync } from "https://deno.land/std/fs/mod.ts";
import {
  readCSVObjects,
} from "https://deno.land/x/csv/mod.ts";
import Ask from 'https://deno.land/x/ask/mod.ts';

interface ILog {
  name: string;
  description?: string;
  pid: string;
  timestramp?: string;
}

interface ICommandParams {
  file: string;
  format?: string;
  process: string;
  [key: string]: any;
}

const token = Deno.env.toObject()["LOGGER_REST_TOKEN"] ||
  "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Inhpbmd3ZW5qdSIsImVtYWlsIjoieGluZ3dlbmp1QGdtYWlsLmNvbSJ9.auCidFeJ7foumlVGCws7Aqlzk-RpqLlhO9NcHmzXpbI";
const baseURL = `http://xunqinji.top:9007/api/v1/games`;

const LIST_BIN = "/mnt/c/Windows/system32/tasklist.exe";
const KILL_BIN = "/mnt/c/Windows/system32/taskkill.exe";
const LIST_LINK = "/usr/local/bin/tasklist.exe";
const KILL_LINK = "/usr/local/bin/taskkill.exe";

const INSTALL_PATH = "smart-logger";


async function askParams() {
  const ask = new Ask();
  const answers = await ask.prompt([
    {
      name: 'file',
      type: 'input',
      message: 'File Name (default /tmp/games): '
    },
    {
      name: 'format',
      type: 'input',
      message: 'File Format (default csv): '
    },
    {
      name: 'process',
      type: 'input',
      message: 'Process Name (default Minecraft): '
    },
    {
      name: 'kill',
      type: 'confirm',
      message: 'Kill process (default false): '
    },
  ]);
  if (!answers.file) {
    answers.file = '/tmp/games'
  }
  if (!answers.format) {
    answers.format = 'csv'
  }
  if (!answers.process) {
    answers.process = 'Minecraft'
  }
  console.log(answers);
  return answers;
}


async function ensureExePath(command: string = "deno") {
  // link any command you want to link, if available
  const { status: { success }, output } = await exec(`which ${command}`, {
    output: OutputMode.Capture,
  });
  if (success) {
    const link = `/usr/local/bin/${command}`;
    await exec(`sudo ln -s ${output} ${link}`);
    // await exec(`sudo ls -l ${link}`);
  } else {
    const source = `/root/.deno/bin/${command}`;
    const link = `/usr/local/bin/${command}`;
    await exec(`sudo ln -s ${source} ${link}`);
    // await exec(`sudo ls -l ${link}`);
  }
  // link taskkill.exe and tasklist.exe
  await exec(`sudo ln -s ${LIST_BIN} ${LIST_LINK}`);
  // await exec(`sudo ls -l ${LIST_LINK}`);
  await exec(`sudo ln -s ${KILL_BIN} ${KILL_LINK}`);
  // await exec(`sudo ls -l ${KILL_LINK}`);
}

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
 * 列出所有的任务
 *
 * @param {string} filePath 拟写入文件路径csv或table格式，不带扩展名，默认/tmp/games
 * @param {string} format 格式csv或txt
 */
async function taskListAll(filePath: string, format: string) {
  await exec(`bash -c "sudo ${LIST_BIN} /FO ${format} > ${filePath}"`);
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
  await exec(`sudo ${KILL_BIN} /PID ${pid}`);
}

/**
 * 运行自身
 *
 * @param {string} pid 进程id
 */
async function logAll(process: string, kill: boolean) {
  await ensureExePath("deno");
  await exec(`${INSTALL_PATH} log -f csv /tmp/games`);
  await exec(`${INSTALL_PATH} json -f csv -k ${process} /tmp/games`);
  await exec(`${INSTALL_PATH} pids -f csv -k ${process} /tmp/games`);
  await exec(`${INSTALL_PATH} send -f csv -k ${process} /tmp/games`);
  if (kill) {
    await exec(`sudo ${INSTALL_PATH} kill -f csv -k ${process} /tmp/games`);
  }
}

/**
 * 运行自身
 *
 * @param {string} pid 进程id
 */
async function logAllWithAsk() {
  await ensureExePath("deno");
  const { file, format, process, kill } = await askParams();

  await exec(`${INSTALL_PATH} log -f ${format} ${file}`);
  await exec(`${INSTALL_PATH} json -f ${format} -k ${process} ${file}`);
  await exec(`${INSTALL_PATH} pids -f ${format} -k ${process} ${file}`);
  await exec(`${INSTALL_PATH} send -f ${format} -k ${process} ${file}`);
  if (kill) {
    await exec(`sudo ${INSTALL_PATH} kill -f ${format} -k ${process} ${file}`);
  }
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
    console.log("[data]: start sending ...");
    console.log(game);
    const response = await postData(url, game);
    console.log("[data]: response ending ...");
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

/**
 * 程序选项
 */
const program = new Denomander({
  app_name: "Smart Logger",
  app_description:
    "Create Log in csv, json format from the command-line of wsl",
  app_version: "1.5.0",
});

program
  .command("log [file]")
  .option("-f --format", "File format")
  .description("log -f csv /tmp/games | log -f table /tmp/games")
  .action(async ({ file }: { file: string }) => {
    console.log(
      "Create link of deno, smart-logger, tasklist.exe and taskkill.exe",
    );
    await ensureExePath("deno");
    await taskListAll(file, program.format);
    console.log(`Saved all process  to ${file} as ${program.format}`);
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
    console.log(data);
    // write to json
    console.log(`Write JSON of all process of ${program.keyword}`);
    await createJsonLog(file, data);
    console.log(`Wrote JSON of all process of ${program.keyword}`);
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
    console.log(data);
    console.log(`Save all pid of process of ${program.keyword}`);
    // write to pid file
    await createPidOnlyLog(file, data);
    console.log(`Saved all pid of process of ${program.keyword}`);
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
    console.log(data);
    console.log(`Send all process of ${program.keyword}  to api server`);
    // send to api server
    await sendTextLog(baseURL, data);
    console.log(`Sent all process of ${program.keyword}  to api server`);
  });

program
  .command("kill [file]")
  .option("-f --format", "File format")
  .option("-k --keyword", "Query keyword")
  .description("kill -k Youku -f csv /tmp/games")
  .action(async ({ file }: { file: string }) => {
    const data = await filterLogWithKeyword(
      program.keyword,
      file,
      program.format,
    );
    console.log(data);
    console.log(`Danger! Kill all process of ${program.keyword}`);
    // kill process
    await ensureExePath("deno");
    await taskKillAll(data);
    console.log(`Killed all process of ${program.keyword}`);
  });

program
  .command("link [command]")
  .description("link deno")
  .action(async ({ command }: { command: string }) => {
    await ensureExePath(command);
  });

program
  .command("log-all [process]")
  .option("-k --kill", "kill or not")
  .description("log-all Code --kill true")
  .action(async ({ process }: { process: string }) => {
    await logAll(process, program.kill);
  });

program
  .command("log-ask")
  .description("log-ask")
  .action(async () => {
    await logAllWithAsk()
  });

program
  .command("helper")
  .description("helper")
  .action(async () => {
    let msg =
      'deno install --allow-run -f --name taskkill "deno.land/x/win_taskkill/cli.ts';
    console.log(
      "Install wrapper for the Windows taskkill command. Ends one or more tasks or processes.",
    );
    console.log(msg);
    msg =
      'deno install --allow-run -f --name tasklist "deno.land/x/win_tasklist/cli.ts';
    console.log(
      "Install wrapper for the Windows tasklist command. Shows one or more tasks or processes.",
    );
    console.log(msg);
  });

program.parse(Deno.args);
