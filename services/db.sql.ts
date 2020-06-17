// Copyright 2018-2020 Xing Wenju. All rights reserved. MIT license.
// Copyright 2018-2020 Xing Wenju. All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Services
|--------------------------------------------------------------------------
*/
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
