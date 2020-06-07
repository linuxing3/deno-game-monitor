import env from "../config/env.ts";
/**
 * Postgres connection options
 */
export const postgresOptions = {
  database: Deno.env.get("POSTGRES_DATABASE"),
  hostname: Deno.env.get("POSTGRES_HOSTNAME"),
  username: Deno.env.get("POSTGRES_USERNAME"),
  password: Deno.env.get("POSTGRES_PASSWORD"),
  port: Number(Deno.env.get("POSTGRES_PORT")) || 5432,
};

/**
 * MySQL connection options
 */
export const mysqlOptions = {
  database: Deno.env.get("MYSQL_DATABASE"),
  hostname: Deno.env.get("MYSQL_HOSTNAME"),
  username: Deno.env.get("MYSQL_USERNAME"),
  password: Deno.env.get("MYSQL_PASSWORD"),
  port: Number(Deno.env.get("MYSQL_PORT")) || 3306,
};

export const dsoOptions = {
  hostname: env["DB_HOST"] || "xunqinji.top",
  port: Number(env["DB_PORT"]) || 9005,
  username: env["DB_USERNAME"] ||"monitor",
  password: env["DB_PASSWORD"] || "20090909",
  db: env["DB_DATABASE"] || "monitor"
}

/**
 * SQLite connection options
 */
export const sqliteOptions = {
  database: ":memory:",
  // database: "games.sqlite",
};
