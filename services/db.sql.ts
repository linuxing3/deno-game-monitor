import {
  dso,
  Client,
} from "../deps.ts";
import env from "../config/env.ts";

import { UserModel } from "../models/UserModel.ts"
import { GameModel } from "../models/GameModel.ts"

export const userModel = dso.define(UserModel);
export const gameModel = dso.define(GameModel);

// TODO: client to be global
export const client: Client = await dso.connect({
  hostname: env["DB_HOST"] || "xunqinji.top",
  port: parseInt(env["DB_PORT"]) || 9005,
  username: env["DB_USERNAME"] ||"monitor",
  password: env["DB_PASSWORD"] || "20090909",
  db: env["DB_DATABASE"] || "monitor"
});

export async function initDb() {
  await dso.sync(false);
}