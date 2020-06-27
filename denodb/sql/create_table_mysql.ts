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
  username: "monitor",
  password: "20090909",
  database: "monitor",
  port: 9005
});

mydb.link([User, Member, Document, Vehicle, Militant, Project, Flight]);

await mydb.sync({ drop: true });

await mydb.close();
