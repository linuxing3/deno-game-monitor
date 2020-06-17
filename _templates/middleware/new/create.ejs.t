---
to: middleware/<%= name %>.<%= action %>.middleware.ts
---
// deno-lint-ignore-file
export default async (ctx: any, next: any) => {
  await next();
};

// hygen starts
// hygen ends
