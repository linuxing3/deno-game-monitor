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

const postdb = new Database("postgres", {
  host: "xunqinji.top",
  username: "pi",
  password: "20090909",
  database: "monitor",
  port: 9003
});

postdb.link([User, Member, Document, Vehicle, Militant, Project, Flight]);

await postdb.sync({ drop: true });

await postdb.close();
