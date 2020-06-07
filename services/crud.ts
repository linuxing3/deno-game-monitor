import client from "../services/db.ts";

// Grub Options
export async function findAllRecord(model: any) {
  const records = await model.find();
  console.log("[All] :", records);
  return records;
}

export async function findRecord(model: any, query: any) {
  let records;
  if (query.id) {
    records = await model.findOne(query.id);
  } else {
     records = await model.find(query);
  }
  console.log("[One] by id:", records);
  return records;
}

export async function addRecord(model: any, data: any) {
  // await client
  // .queryBuilder(model.tableName)
  // .insert(data)
  // .execute();
  const { id } = await model.insert(data);
  console.log("[New] with id:", id);
  return id;
}

export async function updateRecord(model: any, query: any) {
  await client
  .queryBuilder(model.tableName)
  .where("id", query.id)
  .update(query)
  .execute();
  const record = await model.findOne(query.id)
  console.log(`Update user with id: ${record.id}`);
  return record
}

export async function deleteRecord(model: any, query: any) {
  // await client.queryBuilder("users").where("email", "a@b.com").delete().execute();
  const record = await model.findOne(query.id);
  await record.remove()
  console.log("Delete user by id:", record);
  return record;
}