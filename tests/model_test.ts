import { assertEquals } from "../testdeps.ts";

import { connect, Model, FieldType } from "https://deno.land/x/cotton/mod.ts";
import { MysqlAdapter } from "https://deno.land/x/cotton/src/adapters/mysql.ts";

const mysqlOptions = {
  hostname: "xunqinji.top",
  port: 9005,
  username: "monitor",
  password: "20090909",
  database: "monitor",
}

Deno.test("connect: mysql", async () => {
  const db = await connect({ type: "mysql", ...mysqlOptions });
  assertEquals(db instanceof MysqlAdapter, true);
  await db.disconnect();
});

class User extends Model {
  static tableName = "users";
  static fields = {
    name: { type: FieldType.STRING },
    email: { type: FieldType.STRING },
    password: { type: FieldType.STRING },
  };

  name!: string;
  email!: string;
  password!: string;
}

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
  assertEquals(users.length, 2);
  assertEquals(users[0] instanceof User, true);
  await db.disconnect();
});

Deno.test("model: insert", async () => {
  const db = await connect({ type: "mysql", ...mysqlOptions });
  db.addModel(User);
  const user = await User.insert({
    name: "xunqinji",
    email: "xiangshaolong@xunqinji.com",
    password: "123456",
  });
  assertEquals(user instanceof User, true);
  assertEquals(user?.name, "xunqinji");
  await db.disconnect();
});
