import {
  dso,
  Client,
} from "../deps.ts";
import { mysqlOption } from "../config/db.ts";

// TODO: client to be global
export const client: Client = await dso.connect(mysqlOption);

export async function initDb() {
  await dso.sync(false);
}
