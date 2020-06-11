import { Application, oakCors } from "./deps.ts";
import env from "./config/env.ts";

import gameRouter from "./routes/game.ts";
import homeRouter from "./routes/home.tsx";
import authRouter from "./routes/auth.ts";

import logger from "./middleware/logger.ts";
import timer from "./middleware/timer.ts";
import error from "./middleware/error.ts";

import { initDb } from "./services/db.sql.ts";

const host = env["HOST"] || "http://127.0.0.1";
const port = parseInt(env["PORT"]) || 8000;

export const app = new Application();

// Builtin middleware
app.use(oakCors()); // Enable CORS for All Routes
app.use(gameRouter.routes())
  .use(homeRouter.routes())
  .use(authRouter.routes());
app.use(gameRouter.allowedMethods())
  .use(homeRouter.allowedMethods())
  .use(authRouter.allowedMethods());

// User middleware
app.use(logger);
app.use(timer);
app.use(error);

// Mysql Db with ORM
await initDb();

// bootstrap
console.log(`Server running on ${host}:${port}`);
await app.listen({ port });
