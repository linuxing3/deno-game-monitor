import Denomander from "https://deno.land/x/denomander/mod.ts";
import { writeJsonSync } from 'https://deno.land/std/fs/mod.ts';
import { readCSVObjects } from "https://deno.land/x/csv/mod.ts";

interface ILog {
  name: string;
  description?: string;
  pid: string;
  timestramp?: string;
}

const token = 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Inhpbmd3ZW5qdSIsImVtYWlsIjoieGluZ3dlbmp1QGdtYWlsLmNvbSJ9.auCidFeJ7foumlVGCws7Aqlzk-RpqLlhO9NcHmzXpbI'
const ns = 'games'
const baseURL = `http://xunqinji.top:9007/api/v1/games`;
const decoder = new TextDecoder('utf-8')
// const fileNames = Deno.args || `/tmp/${ns}.log`;

async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      "Authorization": token       
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}


async function taskListAll(filePath: string, format: string) {
  const p = Deno.run({
    cmd: [
      "tasklist.exe",
      "/FO",
      format
    ],
    stdout: "piped",
    stderr: "piped"
  });

  const { code } = await p.status();
  if (code === 0) {
    const rawOutput = await p.output();
    // await Deno.stdout.write(rawOutput);
    await Deno.writeFile(filePath, rawOutput);
  } else {
    const rawError = await p.stderrOutput();
    const errorString = new TextDecoder().decode(rawError);
    console.log(errorString);
  }
  Deno.exit(code);
}

async function taskKillAll(process: any[]) {
  process.forEach(async p => {
    taskKill(p["PID"])
  })
}

async function taskKill(pid: string) {
  const p = Deno.run({
    cmd: [
      "taskkill.exe",
      "/PID",
      pid
    ],
    stdout: "piped",
    stderr: "piped"
  });

  const { code } = await p.status();
  if (code === 0) {
    const rawOutput = await p.output();
    await Deno.stdout.write(rawOutput);
  } else {
    const rawError = await p.stderrOutput();
    const errorString = new TextDecoder().decode(rawError);
    console.log(errorString);
  }
  Deno.exit(code);
}

async function readTextLog(keyword: string, filePath: string) {
  const f = await Deno.open(filePath);
  let options = {}
  if (filePath.split('.')[1] === 'csv') {
    options = {
      columnSeparator: ",",
      lineSeparator: "\r\n"
    };
  } else {
    options = {
      columnSeparator: "\t",
      lineSeparator: "\r\n"
    };
  }
  let result = []
  for await (const obj of readCSVObjects(f, options)) {
    if (obj["Image Name"] === keyword) {
      result.push(obj)
    }
  }
  f.close();
  return result
}

async function sendTextLog(url: string, data: any[]) {
  // remote post to api server
  const sample = {
    "Image Name": "Code.exe",
    "PID": "67408",
    "Session Name": "Console",
    "Session#": "1",
    "Mem Usage": "13,916 K"
  }
  data.forEach(async d => {
    const game = {
      name: d["Image Name"],
      description: d["Session Name"],
      pid: d["PID"]
    }
    console.log(game)
    await postData(url, game)
  })
}

async function createJsonLog(filePath: string, result: any[]) {
  writeJsonSync(filePath.split('.')[0] + '.json', result, { spaces: 2 });
}

async function createPidOnlyLog(filePath: string, result: any[]) {
  const content = result.map(p => p['PID'])
  console.log(content)
  await Deno.writeTextFile(filePath.split('.')[0], content.join('\n'))
}

// Start the command line program
const program = new Denomander({
  app_name: 'Log App',
  app_description: 'Create Log in json format from the command-line',
  app_version: '1.0.0',
});

program
  .command('log [file] [format]')
  .description('log /tmp/games.csv csv | log /tmp/games.log table')
  .action(async ({ file, format }: { file: string, format: string}) => {
    await taskListAll(file, format)
  });

program
  .command('show [keyword] [file]')
  .description('show Code.exe /tmp/games.csv')
  .action(async ({ keyword, file }: { keyword: string, file: string }) => {
    await readTextLog(keyword, file)
  });

program
  .command('json [keyword] [file]')
  .description('json Code.exe /tmp/games.csv')
  .action(async ({ keyword, file }: { keyword: string, file: string }) => {
    const data = await readTextLog(keyword, file)
    await createJsonLog(file, data)
  });

program
  .command('pids [keyword] [file]')
  .description('pids Code.exe /tmp/games.csv')
  .action(async ({ keyword, file }: { keyword: string, file: string }) => {
    const data = await readTextLog(keyword, file)
    await createPidOnlyLog(file, data)
  });

program
  .command('send [keyword] [file]')
  .description('send Code.exe /tmp/games.csv')
  .action(async ({ keyword, file }: { keyword: string, file: string }) => {
    const data = await readTextLog(keyword, file)
    await sendTextLog(baseURL, data)
  });

program
  .command('kill [keyword] [file]')
  .description('kill Code.exe /tmp/games.csv')
  .action(async ({ keyword, file }: { keyword: string, file: string }) => {
    const data = await readTextLog(keyword, file)
    await taskKillAll(data)
  });

program.parse(Deno.args);