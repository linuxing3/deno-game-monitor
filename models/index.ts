/*
|--------------------------------------------------------------------------
| Models
|--------------------------------------------------------------------------
*/
import {
  dso,
  BaseModel,
} from "../deps.ts";

import { UserModel } from "../models/user.model.ts";
import { GameModel } from "../models/game.model.ts";
import { DocumentModel } from "../models/document.model.ts";
// hygen starts
// hygen ends
export const documentModel = dso.define(DocumentModel);
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
  documents: documentModel,
};

export default modelMap;
