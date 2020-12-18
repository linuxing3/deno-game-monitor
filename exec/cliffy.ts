import { Table } from "https://deno.land/x/cliffy/table.ts";
import { Command } from "https://deno.land/x/cliffy/command.ts";
import { Input } from "https://deno.land/x/cliffy/prompt.ts";
import { Confirm } from "https://deno.land/x/cliffy/prompt.ts";
import { Select, Separator } from "https://deno.land/x/cliffy/prompt.ts";

const pizza: string = await Select.prompt({
  message: "Select your pizza?",
  options: [{
    name: "", value: "taste"
  }],
});

const useDeno: boolean = await Confirm.prompt("Would you like to use deno?");
const name: string = await Input.prompt(`What's your command name?`);

await new Command()
  .version("0.1.0")
  .description(`${name} Example description ...`)
  .parse(Deno.args);

Table.from([
  ["Flags", "Description", "Types"],
  ["cell1", "cell2", "cell3"],
  ["cell1", "cell2", "cell3"],
  ["cell1", "cell2", "cell3"],
])
  .maxCellWidth(50)
  .padding(1)
  .indent(2)
  .border(true)
  .render();
