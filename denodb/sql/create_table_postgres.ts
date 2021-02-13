import { Database } from "https://deno.land/x/denodb/mod.ts";
import {
  User,
  Member,
  Document,
  Militant,
} from "../mock/CoreModels.ts";
import { models } from "../mock/models.index.denodb.ts";
import { postOptions } from "../../config/db.ts";

const { host, database, port, user, password} = postOptions;

const postdb = new Database("postgres", {
  host: host,
  username: user,
  password: password,
  database: database,
  port: port,
});

postdb.link([User, Member, Document, Militant, ...models]);

await postdb.sync({ drop: true });

await postdb.close();
