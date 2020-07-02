import { Database } from "https://deno.land/x/denodb/mod.ts";
import {
  User,
  Member,
  Document,
  Militant,
} from "../mock/models.ts";
import { models } from "../mock/models.index.ts";

const postdb = new Database("postgres", {
  host: "dongxishijie.xyz",
  username: "postgres",
  password: "20090909",
  database: "monitor",
  port: 9006,
});

postdb.link([User, Member, Document, Militant, ...models]);

await postdb.sync({ drop: true });

await postdb.close();
