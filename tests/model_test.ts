import { Database, DataTypes, Model } from 'https://deno.land/x/denodb/mod.ts';
import { hash } from "https://deno.land/x/bcrypt/mod.ts";
import { assertEquals } from "../testdeps.ts";
import { mysqlOptions} from "../config/db.ts";

class User extends Model {
  static table = 'user';
  static timestamps = true;

  static fields = {
    id: {
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
  };
}
// const db = new Database('mysql', mysqlOptions);
const db = new Database('sqlite3', {
  filepath: 'denodb.sqlite',
});
db.link([User]);
await db.sync({ drop: true });

Deno.test("model: create", async () => {
  const password = await hash('20090909');
  const data = await User.create({
    name: 'test',
    password,
    email: 'test@qq.com'
  })
  const count = await User.count()
  assertEquals(count, 1)
});

Deno.test("model: find", async () => {
  const record = await User.where('name', 'test').get()
  assertEquals(record[0]['name'], 'test')
});

Deno.test("model: update", async () => {
  await User.where('name', 'test').update('name', 'deno');
  const record = await User.where('name', 'test').get()
  assertEquals(record['0'].name, 'deno')
});
