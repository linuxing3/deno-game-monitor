import { connect, Model, FieldType } from "https://deno.land/x/cotton/mod.ts";
import { MysqlAdapter } from "https://deno.land/x/cotton/src/adapters/mysql.ts";

import { assertEquals } from "../testdeps.ts";
import { mysqlOptions} from "../config/db.ts";
import { User } from "../controllers/user.cotton.ts";

Deno.test("connect: mysql", async () => {
  const db = await connect({ type: "mysql", ...mysqlOptions });
  assertEquals(db instanceof MysqlAdapter, true);
  await db.disconnect();
});


Deno.test("model: findOne", async () => {
  const db = await connect({ type: "mysql", ...mysqlOptions });
  db.addModel(User);
  const user = await User.findOne(1);
  assertEquals(user instanceof User, true);
  console.table(user);
  await db.disconnect();
});

Deno.test("model: findAll", async () => {
  const db = await connect({ type: "mysql", ...mysqlOptions });
  db.addModel(User);
  const users = await User.find();
  assertEquals(users.length, 3);
  assertEquals(users[0] instanceof User, true);
  await db.disconnect();
});

// Deno.test("model: insert", async () => {
//   const db = await connect({ type: "mysql", ...mysqlOptions });
//   db.addModel(User);
//   const user = await User.insert({
//     name: "xunqinji",
//     email: "xiangshaolong@xunqinji.com",
//     password: "123456",
//   });
//   assertEquals(user instanceof User, true);
//   assertEquals(user?.name, "xunqinji");
//   await db.disconnect();
// });
