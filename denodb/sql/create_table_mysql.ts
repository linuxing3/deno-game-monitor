import { Database } from "https://deno.land/x/denodb/mod.ts";
import {
  Member,
  Document,
  Militant,
  Flight,
} from "../mock/CoreModels.ts";
// import { models } from "../mock/models.index.denodb.ts";
import { mysqlOption} from "../../config/db.ts";

const { hostname, db, port, username, password} = mysqlOption;
const mydb = new Database("mysql", {
  host: hostname,
  username: username,
  password: password,
  database: db,
  port: port,
});

mydb.link([ Member, Document, Militant, Flight]);

await mydb.sync({ drop: false });

await mydb.close();
