import { Application, oakCors } from "./deps.ts";
import env from "./config/env.ts";

import homeRouter from "./routes/home.tsx";

const host = env["HOST"] || "http://127.0.0.1";
const port = parseInt(env["PORT"]) || 8000;

export const app = new Application();

// Builtin middleware
app.use(oakCors()); // Enable CORS for All Routes
app.use(homeRouter.routes())

app.use(homeRouter.allowedMethods())

// bootstrap
console.log(`Server running on ${host}:${port}`);
await app.listen({ port });