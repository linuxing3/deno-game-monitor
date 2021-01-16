import { Command } from "https://deno.land/x/cliffy/command/mod.ts";
import { prompt, Input, Number, Confirm, Checkbox } from "https://deno.land/x/cliffy/prompt/mod.ts";
import { Table } from "https://deno.land/x/cliffy/table/mod.ts";

// const { options } = await new Command()
//   .option("-s, --silent", "disable output.")
//   .option("-d, --debug [level]", "output extra debugging.")
//   .option("-p, --port <port>", "the port number.")
//   .option("-h, --host [hostname]", "the host name.", { default: "localhost" })
//   .option("-a, --allow [hostname]", "the host name.", { default: "localhost" })
//   .parse(Deno.args);

// console.log("server running at %s:%s", options.host, options.port);

const result = await prompt([{
  name: "name",
  message: "What's your name?",
  type: Input,
}, {
  name: "age",
  message: "How old are you?",
  type: Number,
}, {
  name: "like",
  message: "Do you like animal's?",
  type: Confirm,
}, {
  name: "animals",
  message: "Select some animal's",
  type: Checkbox,
  options: ["dog", "cat", "snake"],
}]);

console.log(result);

const table: Table = new Table(
  ["Row 1 Column 1", "Row 1 Column 2", "Row 1 Column 3"],
  ["Row 2 Column 1", "Row 2 Column 2", "Row 2 Column 3"],
  ["Row 3 Column 1", "Row 3 Column 2", "Row 3 Column 3"],
);

table
.padding(1)
.indent(2)
.border(true)
.render();

// console.log(table.toString());
// You can also use table.render() as shorthand which uses Deno.stdout.writeSync() under the hood.

