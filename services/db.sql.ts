import {
  dso,
  Where
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

import { UserModel } from "../models/UserModel.ts"
import { GameModel } from "../models/GameModel.ts"

export const userModel = dso.define(UserModel);
export const gameModel = dso.define(GameModel);

export async function initDb() {
  await dso.connect({
    hostname: "xunqinji.top",
    port: 9005,
    username: "monitor",
    password: "20090909",
    db: "monitor"
  });
  await dso.sync(false);
}

export async function addRecord(model: UserModel | GameModel, data: any) {

  const id = await model.insert(data);
  return id;
  
}

export async function findRecord(model: UserModel | GameModel, query: any) {

  let record;
  if (query.id) {
    record = await model.findById(query.id);
  } else {
     record = await model.findOne(Where.from(query));
  }
  console.log("Found user by id:", record);
  return record;
  
}

export async function updateRecord(model: UserModel | GameModel, query: any) {

  const records = await model.update(query, Where.from({id: query.id}));
  return records;
  
}

export async function deleteRecord(model: UserModel | GameModel, query: any) {

  let record;
  await model.update(query);

  record = await model.delete(Where.from(query));
  console.log("Found user by id:", record);
  return record;
  
}

export async function findAllRecord(model: UserModel | GameModel) {

  const records = await model.findAll(Where.expr("id > 0"));
  console.log("Found user by id:", records);
  return records;

}