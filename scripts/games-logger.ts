import Denomander from "https://deno.land/x/denomander/mod.ts";
export * as path from 'https://deno.land/std/path/mod.ts';

const baseURL = "http://xunqinji.top:9007/api/v1/games";
const fileNames = Deno.args || "/tmp/games.log";
const decoder = new TextDecoder('utf-8')

const program = new Denomander({
  app_name: 'Notes App',
  app_description: 'Create notes in json format from the command-line',
  app_version: '1.0.0',
});

program
  .command('cat [file]')
  .description('cat log file')
  .action (({ file }: any) => {
    console.log(file)
    catFile(file)
  });

  
interface GamePlayLog {
  name: string;
  description?: string;
  pid: string;
  timestramp?: string;
}

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

async function catFile(file: string) {
  const p = Deno.run({
    cmd: [
      "cat",
      ...fileNames,
    ],
    stdout: "piped",
    stderr: "piped",
  });

  const { code } = await p.status();

  if (code === 0) {
    const rawOutput = await p.output();
    await Deno.stdout.write(rawOutput);
    const game: GamePlayLog = {
      name: "Minecraft",
      description: "Minecraft process",
      pid: decoder.decode(rawOutput),
      timestramp: new Date(),
    };
    await postData(baseURL, game)
    console.log(game)
  } else {
    const rawError = await p.stderrOutput();
    const errorString = decoder.decode(rawError);
    console.log(errorString);
  }

  Deno.exit(code);

}

program.parse(Deno.args);