---
to: middleware/<%= name %>.<%= action %>.middleware.ts
---
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Middlewares
|--------------------------------------------------------------------------
|
| Check the query and find the [table] value
| Get the related [ModelClass] from modelMap
| Bind the [ModelClass] to the context
|
*/
export default async (ctx: any, next: any) => {
  await next();
};

// hygen starts
// hygen ends
