import { Database } from "https://deno.land/x/denodb/mod.ts";
import {
  User,
  Member,
  Document,
  Vehicle,
  Militant,
  Project,
  Flight,
} from "../mock/models.ts";

const mydb = new Database("mysql", {
  host: "dongxishijie.xyz",
  username: "root",
  password: "qpRAW",
  database: "trojan",
  port: 31911,
});

mydb.link([ Member, Document, Vehicle, Militant, Project, Flight]);

await mydb.sync({ drop: false });

await mydb.close();
