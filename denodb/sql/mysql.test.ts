import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { Database } from "https://deno.land/x/denodb/mod.ts";
import {
  User,
  Member,
  Document,
  Militant,
  Flight
} from "../mock/CoreModels.ts";
import { flights } from "../mock/data.ts";

import { mysqlOption} from "../../config/db.ts";

const { hostname, db, port, username, password} = mysqlOption;
const mydb = new Database("mysql", {
  host: hostname,
  username: username,
  password: password,
  database: db,
  port: port,
});


await mydb.sync({ drop: true });

flights.forEach(async (flight) => {
  await Flight.create(flight);
});

// getAll
Deno.test("[ Denodb ]: all flights", async () => {
  const records = await Flight.select("destination").all();
  const expected = [
    { destination: "Tokyo" },
    { destination: "Beijing" },
    { destination: "New York" },
  ];
  assertEquals(records, expected);
});

Deno.test("[ Denodb ]: get second flight", async () => {
  const sfFlight = await Flight.select("destination").find(2);
  const expected = { destination: "Beijing" };
  assertEquals(sfFlight, expected);
  // console.log(sfFlight);
});

Deno.test("[ Denodb ]: find one flight by id", async () => {
  const foundRecord = await Flight.select("id", "destination")
    .orderBy("id")
    .get();
  const expected = [
    { id: 1, destination: "Tokyo" },
    { id: 2, destination: "Beijing" },
    { id: 3, destination: "New York" },
  ];
  assertEquals(foundRecord, expected);
});

Deno.test("[ Denodb ]: update one flight by id", async () => {
  const newFlight = {
    departure: "Paris",
    destination: "Beijing",
  };
  await Flight.where("destination", "Tokyo").update({ destination: "Beijing" });
  const updatedRecord = await Flight.where("destination", "Beijing")
    .orderBy("id")
    .get();
  assertEquals(updatedRecord[0]["id"], 1);
  assertEquals(updatedRecord[0]["destination"], "Beijing");
});

// count
Deno.test("[ Denodb ]: update one flight by id", async () => {
  const total = await Flight.count();
  assertEquals(parseInt(total), 3);
});

await mydb.close();
