import { connect } from "https://deno.land/x/cotton/mod.ts";
import { mysqlOptions, sqliteOptions } from "../config/connectOptions.ts";

export const client = await connect({
  type: "mysql", 
  ...mysqlOptions
});

export const liteclient = await connect({
  type: "sqlite",
  ...sqliteOptions
});

export default client;