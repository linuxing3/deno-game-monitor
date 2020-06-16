import {
  dso,
  BaseModel,
} from "../deps.ts";

import { UserModel } from "../models/UserModel.ts";
import { GameModel } from "../models/GameModel.ts";
// hygen starts
import { DocumentModel } from "../models/DocumentModel.ts";
export const documentModel = dso.define(DocumentModel);
// hygen ends
export const userModel = dso.define(UserModel);
export const gameModel = dso.define(GameModel);

interface ModelMap {
  [name: string]: BaseModel;
}

// FIXME All model names should be same
// the key [users] should be equal
// in [UserModel] @Model('users')
// query parameter table=users
// In database server, the table name is [users]
const modelMap: ModelMap = {
  users: userModel,
  games: gameModel,
};

export default modelMap;
