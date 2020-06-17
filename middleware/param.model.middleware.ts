// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Middleware: param model 
|--------------------------------------------------------------------------
|
| Check the query and find the [table] value
| Get the related [ModelClass] from modelMap
| Bind the [ModelClass] to the context
|
*/
import { BaseModel, Status } from "../deps.ts";
import modelMap from "../models/index.ts";
export default async (ctx: any, next: any) => {
  const modelName: string = ctx.params.table;
  if (!modelName) {
    ctx.throw(Status.BadRequest);
  } else {
    const modelClass = modelMap[modelName];
    if (modelClass instanceof BaseModel) {
      ctx.model = modelClass;
      await next();
    } else {
      ctx.throw(Status.BadRequest);
    }
  }
};
