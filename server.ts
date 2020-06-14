// Copyright 2018-2020 Xing Wenju. All rights reserved. MIT license.
// deno-lint-ignore-file
import {
  Application,
  oakCors,
} from "./deps.ts";
import env from "./config/env.ts";

// Routes
import gameRouter from "./routes/game.ts";
import homeRouter from "./routes/home.ts";
import authRouter from "./routes/auth.ts";

// Middleware
import logger from "./middleware/logger.ts";
import timer from "./middleware/timer.ts";
import error from "./middleware/error.ts";

// SQL Server
import { initDb } from "./services/db.sql.ts";

const host = env["HOST"];
const port = parseInt(env["PORT"]);

// Configure Application
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

// Bootstrap Application
console.log(`Server running on ${host}:${port}`);
await app.listen({ port });
