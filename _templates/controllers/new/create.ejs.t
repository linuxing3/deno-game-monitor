---
to: controllers/<%= name %>.controller.ts
---
<%
const modelName = h.changeCase.camel(name);
const modelClass = h.inflection.titleize(name);
%>import { RouteParams, Request, Response } from "../deps.ts";
import <%= modelClass %> from "../services/<%= modelName %>.<%= action %>.ts";

// ------------- //
// CRUD handlers //
// ------------- //

// Read <%= modelName %>
export async function <%= modelName %>List(
  ctx: { request: Request; response: Response },
) {
  const result = await <%= modelClass %>.getAll();
  if (!result.length) {
    ctx.response.status = 404;
    ctx.response.body = { error: "No data found" };
    return;
  }
  ctx.response.status = 200;
  ctx.response.body = { data: result, msg: "Found data" };
}
// create <%= modelName %>
export async function <%= modelName %>Create(
  ctx: { request: Request; response: Response },
) {
  const data = await ctx.request.body();
  if (
    data == undefined || data.value.email == undefined ||
    data.value.password == undefined
  ) {
    ctx.response.status = 400;
    ctx.response.body = { error: "Invalid data" };
    return;
  }

  const result = await <%= modelClass %>.create(data.value.email, data.value.password);
  ctx.response.status = result.status;
  if (result.error) {
    ctx.response.body = { error: result.data };
    return;
  }
  ctx.response.body = { ukey: result.data.ukey, email: result.data.email };
}

// read <%= modelName %>
export function <%= modelName %>Profile(
  ctx: { params: RouteParams; request: Request; response: Response },
) {
  if (ctx.params == undefined || ctx.params.ukey == undefined) {
    ctx.response.status = 400;
    ctx.response.body = { error: "Invalid data" };
    return;
  }

  // check if <%= modelName %> exists
  const <%= modelName %> = <%= modelClass %>.getByUkey(ctx.params.ukey);
  if (<%= modelName %> == undefined) {
    ctx.response.status = 404;
    ctx.response.body = { error: "<%= modelClass %> not found" };
    return;
  }

  ctx.response.status = 200;
  ctx.response.body = { ukey: ctx.params.ukey, email: <%= modelName %>.email };
}

// update <%= modelName %>
export async function <%= modelName %>Update(
  ctx: { params: RouteParams; request: Request; response: Response },
) {
  if (ctx.params == undefined || ctx.params.ukey == undefined) {
    ctx.response.status = 400;
    ctx.response.body = { error: "Invalid data" };
    return;
  }

  // check body
  const data = await ctx.request.body();
  if (data == undefined || data.value.email == undefined) {
    ctx.response.status = 400;
    ctx.response.body = { error: "Invalid data" };
    return;
  }

  // check if <%= modelName %> exists
  const <%= modelName %> = <%= modelClass %>.getByUkey(ctx.params.ukey);
  if (<%= modelName %> == undefined) {
    ctx.response.status = 404;
    ctx.response.body = { error: "<%= modelClass %> not found" };
    return;
  }

  // update <%= modelName %>
  <%= modelName %>.email = data.value.email;
  if (<%= modelName %>.save()) {
    ctx.response.status = 200;
    ctx.response.body = { ukey: ctx.params.ukey, email: <%= modelName %>.email };
    return;
  }

  ctx.response.status = 500;
  ctx.response.body = { error: "Server error" };
}

// delete <%= modelName %>
export function <%= modelName %>Delete(
  ctx: { params: RouteParams; request: Request; response: Response },
) {
  if (ctx.params == undefined || ctx.params.ukey == undefined) {
    ctx.response.status = 400;
    ctx.response.body = { error: "Invalid data" };
    return;
  }

  // check if <%= modelName %> exists
  const <%= modelName %> = <%= modelClass %>.getByUkey(ctx.params.ukey);
  if (<%= modelName %> == undefined) {
    ctx.response.status = 404;
    ctx.response.body = { error: "<%= modelClass %> not found" };
    return;
  }

  // delete <%= modelName %>
  <%= modelName %>.delete();
  ctx.response.status = 200;
  ctx.response.body = {};
}

// hygen starts
// hygen ends