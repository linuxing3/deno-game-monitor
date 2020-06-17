// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Middleware: response time
|--------------------------------------------------------------------------
| Set reponse time to response header
*/
export default async (ctx: any, next: any) => {
  await next();
  const rt = ctx.response.headers.get("X-Response-Time");
  console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
};
