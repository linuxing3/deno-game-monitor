import Dex from "https://deno.land/x/dex/mod.ts";
import Dexecutor from "https://deno.land/x/dexecutor/mod.ts";
import { client, options } from "./config.ts";

let dex = new (Dex as any)({ client });

// Creating the query executor
let dexecutor = new Dexecutor({
  client: client,
  connection: options,
});

// Opening the connection
await dexecutor.connect();

let sqlQuery;

// INSERT Query
sqlQuery = dex.queryBuilder()
  .insert([
    { step: "hello" },
    { step: "dex" },
    { step: "sql" },
  ])
  .into("dex")
  .toString();

await dexecutor.execute(sqlQuery);

// SELECT Query
let result = await dexecutor.execute(
  dex.queryBuilder()
    .select("*")
    .from("dex")
    .toString(),
);

console.log(result.rows);

// Closing the connection
await dexecutor.close();
