// Copyright 2018-2020 Xing Wenju. All rights reserved. MIT license.
// deno-lint-ignore-file
import {
  Application,
  oakCors,
} from "./deps.ts";
import env from "./config/env.ts";

// Routes
import gameRouter from "./routes/game.router.ts";
import homeRouter from "./routes/home.router.ts";
import authRouter from "./routes/auth.router.ts";
import fieldRouter from "./routes/field.router.ts";
// hygen route starts
// hygen route ends

// Middleware
import logger from "./middleware/logger.middleware.ts";
import timer from "./middleware/timer.middleware.ts";
import error from "./middleware/error.middleware.ts";
// hygen middleware starts
// hygen middleware ends

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
  .use(authRouter.routes())
  .use(fieldRouter.routes());

app.use(gameRouter.allowedMethods())
  .use(homeRouter.allowedMethods())
  .use(fieldRouter.allowedMethods())
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
