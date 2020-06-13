import env from "./env.ts";

export const mysqlOption = {
  hostname: env["DB_HOST"],
  port: parseInt(env["DB_PORT"]),
  username: env["DB_USERNAME"],
  password: env["DB_PASSWORD"],
  db: env["DB_DATABASE"]
}