import { readCSVObjects } from "https://deno.land/x/csv/mod.ts";

const f = await Deno.open("./example.csv");

for await (const obj of readCSVObjects(f)) {
  console.log(obj);
}

f.close();
