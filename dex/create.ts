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

// CREATE TABLE Query
sqlQuery = dex.schema.createTable("dex", (table: any) => {
  table.string("step");
}).toString();

await dexecutor.execute(sqlQuery);
// Closing the connection
await dexecutor.close();
