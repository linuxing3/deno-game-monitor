import { client } from "../services/db.sql.ts";

try {
  await client.execute(`
        DROP TABLE IF EXISTS users
    `);

  await client.execute(`
    DROP TABLE IF EXISTS blogs
    `);
} catch (err) {
  console.error(err);
}