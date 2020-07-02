import {
  exec,
  execSequence,
  OutputMode,
} from "https://deno.land/x/exec/mod.ts";

await exec("echo Running Sequence");

let response = await execSequence([
  "echo Hello World",
  "ls -l",
  "cat deno.json",
], { output: OutputMode.StdOut, continueOnError: false });

console.log(response);
