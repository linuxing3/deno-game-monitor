import {
  dso,
  Client,
} from "../deps.ts";
import { dsoOptions } from "../config/connectOptions.ts";

import { UserModel } from "../models/UserModel.ts"
import { GameModel } from "../models/GameModel.ts"

export const userModel = dso.define(UserModel);
export const gameModel = dso.define(GameModel);

// TODO: client to be global
export const client: Client = await dso.connect(dsoOptions);

export async function initDb() {
  await dso.sync(false);
}

// Mysql Db with ORM
await initDb()