// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Middleware: timer
|--------------------------------------------------------------------------
| Calculate time difference
*/
export default async (ctx: any, next: any) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${ms}ms`);
};
