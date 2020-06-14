// Copyright 2018-2020 Xing Wenju. All rights reserved. MIT license.
/* eslint-disable @typescript-eslint/no-explicit-any */
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
