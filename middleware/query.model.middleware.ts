// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Middleware: query model
|--------------------------------------------------------------------------
|
| Check the query and find the [table] value
| Get the related [ModelClass] from modelMap
| Bind the [ModelClass] to the context
|
*/
import { helpers, BaseModel, Status } from "../deps.ts";
import modelMap from "../models/index.ts";
export default async (ctx: any, next: any) => {
  const query = helpers.getQuery(ctx);
  if (!query.table) {
    ctx.throw(Status.BadRequest);
  } else {
    const modelClass = modelMap[query.table];
    if (modelClass instanceof BaseModel) {
      ctx.model = modelClass;
      await next();
    } else {
      ctx.throw(Status.BadRequest);
    }
  }
};
