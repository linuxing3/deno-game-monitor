---
to: middleware/<%= name %>.<%= action %>.middleware.ts
---
// Copyright 2018-2020 Xing Wenju. All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Middleware: <%= name %> <%= action %>
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
