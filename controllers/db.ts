import {
  BaseModel,
  Defaults,
  dso,
  Field,
  FieldType,
  Join,
  Model,
  Where
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

// Define a database model
@Model("users")
export class UserModel extends BaseModel {
  // The ! operator is needed for primary key since it's never null 
  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number; 
  
  // We use ! since name is never null 
  @Field({ type: FieldType.STRING, length: 30, notNull: true }) 
  name!: string;

  // We use ? since password is nullable
  @Field({ type: FieldType.STRING, length: 30 }) 
  password?: string;
}

@Model("games")
export class GameModel extends BaseModel {
  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number; 
  
  @Field({ type: FieldType.STRING, length: 30}) 
  name?: string;

  @Field({ type: FieldType.STRING, length: 30 }) 
  description?: string;
  
  @Field({ type: FieldType.STRING, length: 10, notNull: true }) 
  pid!: string;

  @Field({ type: FieldType.STRING, length: 30 })
  timestramp?: string;

}

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
  await dso.sync(true);
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

  let record;
  await model.update(query);

  record = await model.findById(query.id);
  console.log("Found user by id:", record);
  return record;
  
}

export async function deleteRecord(model: UserModel | GameModel, query: any) {

  let record;
  await model.update(query);

  record = await model.delete(Where.from(query));
  console.log("Found user by id:", record);
  return record;
  
}

export async function findAllRecord(model: UserModel | GameModel, query: any) {

  // const userLike = await userModel.findAll(Where.expr("name like 'user%'"));
  const records = await model.findAll(Where.from(query));
  console.log("Found user by id:", records);
  return records;

}