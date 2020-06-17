// Copyright 2018-2020 Xing Wenju. All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Http Oak server
|--------------------------------------------------------------------------
|
| This file bootstrap Deno to start the HTTP/Oak server. You are free to
| customize the process of booting the http server.
|
*/
import {
  Application,
  oakCors,
} from "./deps.ts";
import env from "./config/env.ts";
import { initDb } from "./services/db.sql.ts";

// Routes
import homeRouter from "./routes/home.router.ts";
import authRouter from "./routes/auth.router.ts";
import fieldRouter from "./routes/field.router.ts";
// hygen route starts

import wildCardRouter from "./routes/wildcard.router.ts";

// hygen route ends

// Middelware
import logger from "./middleware/logger.middleware.ts";
import timer from "./middleware/timer.middleware.ts";
import error from "./middleware/error.middleware.ts";
// hygen middleware starts
// hygen middleware ends

// Configure Application
export const app = new Application();
const host = env["HOST"];
const port = parseInt(env["PORT"]);

/*
|--------------------------------------------------------------------------
| Routes and builtin middleware
|--------------------------------------------------------------------------
 */
app.use(oakCors()); // Enable CORS for All Routes

app.use(homeRouter.routes())
  .use(authRouter.routes())
  .use(fieldRouter.routes())
  .use(wildCardRouter.routes());

app.use(homeRouter.allowedMethods())
  .use(fieldRouter.allowedMethods())
  .use(authRouter.allowedMethods())
  .use(wildCardRouter.allowedMethods());

/*
|--------------------------------------------------------------------------
| User Middleware
|--------------------------------------------------------------------------
 */
app.use(logger);
app.use(timer);
app.use(error);

/*
|--------------------------------------------------------------------------
| Database initialization
|--------------------------------------------------------------------------
 */
await initDb();

/*
|--------------------------------------------------------------------------
| Bootstrap Application
|--------------------------------------------------------------------------
 */
console.log(`Server running on ${host}:${port}`);
await app.listen({ port });
