import { Model } from "../deps.ts";

// Grub Options
export async function findAllRecord(model: typeof Model) {
  const data: any[] = await model.all();
  return data;
}

export async function findRecord(model: typeof Model, query: any) {
  let data;
  if (query.id) {
    data = await model.find(query.id);
  } else {
    data = await model.where(query).get();
  }
  return data;
}

export async function addRecord(model: typeof Model, query: any) {
  const data = await model.create([query]);
  return data;
}

export async function updateRecord(model: typeof Model, query: any) {
  const data = await model.where('id', query.id).update(query);
  return data;
}

export async function deleteRecord(model: typeof Model, query: any) {
  const data = await model.deleteById(query.id);
  return data;
}
