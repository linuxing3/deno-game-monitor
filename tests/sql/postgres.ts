import { DataTypes, Database, Model } from "https://deno.land/x/denodb/mod.ts";

const db = new Database("postgres", {
  host: "dongxishijie.xyz",
  username: "postgres",
  password: "20090909",
  database: "monitor",
  port: 9006,
});

class Flight extends Model {
  static table = "flights";
  static timestamps = true;

  static fields = {
    id: { primaryKey: true, autoIncrement: true },
    departure: DataTypes.STRING,
    destination: DataTypes.STRING,
    flightDuration: DataTypes.FLOAT,
  };

  static defaults = {
    flightDuration: 2.5,
  };
}

db.link([Flight]);

await db.sync({ drop: true });

await Flight.create({
  departure: "Paris",
  destination: "Tokyo",
});

await Flight.create({
  departure: "Caracas",
  destination: "Beijing",
});

await Flight.create({
  departure: "Shanghai",
  destination: "New York",
});

// or
// const flight = new Flight();
// flight["departure"] = "London";
// flight["destination"] = "San Francisco";
// await flight.save();

// getAll
const records = await Flight.select("destination").all();
console.log(records);

// getOne
const sfFlight = await Flight.select("destination").find(2);
console.log(sfFlight);

// getMany
const foundRecord = await Flight.select("id", "destination").orderBy("id")
  .get();
console.log(foundRecord);

// update
await Flight.where("destination", "Tokyo").update(
  { destination: "Beijing" },
);

const updatedRecord = await Flight.where("destination", "Beijing").orderBy("id")
  .get();
console.log(updatedRecord);

// count
const total = await Flight.count();
console.log(total);

// close
await db.close();
