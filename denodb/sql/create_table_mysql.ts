import { Database } from "https://deno.land/x/denodb/mod.ts";
import {
  User,
  Member,
  Document,
  Militant,
} from "../mock/models.ts";
import { models } from "../mock/models.index.ts";

const mydb = new Database("mysql", {
  host: "xunqinji.top",
  username: "monitor",
  password: "20090909",
  database: "monitor",
  port: 9005,
});

mydb.link([User, Member, Document, Militant, ...models]);

await mydb.sync({ drop: true });

await mydb.close();
