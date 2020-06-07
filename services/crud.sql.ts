import {
  Where,
  BaseModel,
} from "../deps.ts";

// Grub Options
export async function findAllRecord(model: BaseModel) {
  const records = await model.findAll(Where.expr("id > 0"));
  console.log("Found user by id:", records);
  return records;
}

export async function findRecord(model: BaseModel, query: any) {
  let record;
  if (query.id) {
    record = await model.findById(query.id);
  } else {
    record = await model.findOne(Where.from(query));
  }
  console.log("Found user by id:", record);
  return record;
}

export async function addRecord(model: BaseModel, data: any) {
  const id = await model.insert(data);
  console.log("New user with id:", id);
  return id;
}

export async function updateRecord(model: BaseModel, query: any) {
  const records = await model.update(query, Where.from({ id: query.id }));
  console.log("Update user with id:", records);
  return records;
}

export async function deleteRecord(model: BaseModel, query: any) {
  await model.update(query);
  const record = await model.delete(Where.from(query));
  console.log("Delete user by id:", record);
  return record;
}
