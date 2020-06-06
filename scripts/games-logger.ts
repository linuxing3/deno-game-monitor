import Denomander from "https://deno.land/x/denomander/mod.ts";
import { writeJsonSync } from 'https://deno.land/std/fs/mod.ts';

interface ILog {
  name: string;
  description?: string;
  pid: string;
  timestramp?: string;
}

const ns = 'games'
const baseURL = `http://xunqinji.top:9007/api/v1/${ns}`;
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
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}


async function addTextLog(keyword: string, filePath: string) {
  const p = Deno.run({
    cmd: [
      "tasklist.exe",
      "|",
      `grep '${keyword}'`,
      "|",
      "awk '{ print $2 }'",
      ">",
      filePath
    ],
    stdout: "piped",
    stderr: "piped",
  });

  const { code } = await p.status();
  if (code === 0) {
    const rawOutput = await p.stdOutput();
    await Deno.stdout.write(decoder.decode(rawOutput));
  } else {
    const rawError = await p.stderrOutput();
    await Deno.stdout.write(decoder.decode(rawError));
  }
  Deno.exit(code);
}

async function addJsonLog(keyword: string, filePath: string, url: string) {
  let result: any[]
  const text: string = decoder.decode(await Deno.readFile(filePath))
  text.split('\n').map((value) => {
    result.push({
      name: keyword,
      pid: value,
      timestramp: new Date()
    })
  })
  // local write
  writeJsonSync(filePath.split('.')[0] + '.json', result, { spaces: 2 });
  // remote post to api server
  await postData(url, lines)
}

// Start the command line program
const program = new Denomander({
  app_name: 'Log App',
  app_description: 'Create Log in json format from the command-line',
  app_version: '1.0.0',
});

program
  .command('[keyword] [file]')
  .description('log with keyword to file')
  .action(({ keyword, file }) => {
    await addTextLog(keyword, file)
    await addJsonLog(keyword, file, baseURL)
  });

program.parse(Deno.args);