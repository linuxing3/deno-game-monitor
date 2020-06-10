import { Application, oakCors } from "./deps.ts";
import env from "./config/env.ts";

import authRouter from "./routes/auth.ts";

import logger from "./middleware/logger.ts";
import timer from "./middleware/timer.ts";
import error from "./middleware/error.ts";
import db from "./services/db.ts";

const host = env["HOST"] || "http://127.0.0.1";
const port = parseInt(env["PORT"]) || 8000;

export const app = new Application();

// Builtin middleware
app.use(oakCors()); // Enable CORS for All Routes
app.use(authRouter.routes());
app.use(authRouter.allowedMethods());

// User middleware
app.use(logger);
app.use(timer);
app.use(error);

app.addEventListener("error", (evt) => {
  console.log(evt.error);
});

console.log(db);

// bootstrap
console.log(`Server running on ${host}:${port}`);
await app.listen({ port });
