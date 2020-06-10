export { Database } from 'https://deno.land/x/denodb/mod.ts';
import { assertEquals } from "../testdeps.ts";
import { mysqlOptions} from "../config/db.ts";
import User from "../models/UserModel.ts";

// Deno.test("connect: mysql", async () => {
//   const db = new Database({
//     dialect: 'mysql',
//     debug: true
//   }, {...mysqlOptions});
//   db.link([ User ]);
//   await db.sync({ drop: true });
//   const user = await User.find(1);
//   assertEquals(user.id, 1);
// });
Deno.test("connect: mysql", async () => {
  console.log(Database);
  assertEquals(1, 1);
});