import { writeCSVObjects } from "https://deno.land/x/csv/mod.ts";

const f = await Deno.open(
  "./example.csv",
  { write: true, create: true, truncate: true },
);
const header = ["a", "b", "c"];
const asyncObjectsGenerator = async function* () {
  yield { a: "1", b: "2", c: "3" };
  yield { a: "4", b: "5", c: "6" };
};

await writeCSVObjects(f, asyncObjectsGenerator(), { header });

f.close();
