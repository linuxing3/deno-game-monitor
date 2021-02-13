import { Database } from "https://deno.land/x/denodb/mod.ts";
import {
  User,
  Member,
  Document,
  Vehicle,
  Militant,
  Project,
  Flight
} from "../mock/models.ts";

const mydb = new Database("mysql", {
  host: "xunqinji.top",
  username: "root",
  password: "jGPcf",
  database: "xray",
  port: 9203
});

mydb.link([Member, Document, Vehicle, Militant, Project, Flight]);

await mydb.sync({ drop: true });

await mydb.close();
