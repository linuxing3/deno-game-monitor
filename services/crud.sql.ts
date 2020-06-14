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

export async function findRecord(
  model: BaseModel,
  query: { id: number | string | undefined } | any,
) {
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

export async function updateRecord(
  model: BaseModel,
  query: { id: number | string | undefined },
  data: any,
) {
  const records = await model.update(data, Where.from(query));
  console.log("Update user with id:", records);
  return records;
}

export async function deleteRecord(
  model: BaseModel,
  query: { id: number | string | undefined },
) {
  const count = await model.delete(Where.from(query));
  console.log(`${count} record deleted`);
  return count;
}
