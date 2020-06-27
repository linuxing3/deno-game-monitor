import { faker } from "https://raw.githubusercontent.com/jackfiszr/deno-faker/master/mod.ts";

const randomName = faker.name.findName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
const randomCard = faker.helpers.createCard(); // random contact card containing many properties

console.log(
  faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}"),
);
console.log(randomName);
console.log(randomEmail);
console.log(randomCard);
