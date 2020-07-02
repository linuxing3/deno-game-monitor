import env from "./env.ts";

export const mysqlOption = {
  hostname: env["MY_HOST"],
  port: parseInt(env["MY_PORT"]),
  username: env["MY_USERNAME"],
  password: env["MY_PASSWORD"],
  db: env["DB_DATABASE"],
};

export const postOptions = {
  host: env["POST_HOST"],
  user: env["POST_USERNAME"],
  password: env["POST_PASSWORD"],
  port: parseInt(env["POST_PORT"]),
  database: env["POST_DATABASE"],
};
