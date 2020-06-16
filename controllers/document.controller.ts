import { RouteParams, Request, Response } from "../deps.ts";
import Document from "../services/document.sql.ts";

// ------------- //
// CRUD handlers //
// ------------- //

// Read document
export async function documentList(
  ctx: { request: Request; response: Response },
) {
  const result = await Document.getAll();
  if (!result.length) {
    ctx.response.status = 404;
    ctx.response.body = { error: "No data found" };
    return;
  }
  ctx.response.status = 200;
  ctx.response.body = { data: result, msg: "Found data" };
}
// create document
export async function documentCreate(
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

  const result = await Document.create(data.value.email, data.value.password);
  ctx.response.status = result.status;
  if (result.error) {
    ctx.response.body = { error: result.data };
    return;
  }
  ctx.response.body = { ukey: result.data.ukey, email: result.data.email };
}

// read document
export function documentProfile(
  ctx: { params: RouteParams; request: Request; response: Response },
) {
  if (ctx.params == undefined || ctx.params.ukey == undefined) {
    ctx.response.status = 400;
    ctx.response.body = { error: "Invalid data" };
    return;
  }

  // check if document exists
  const document = Document.getByUkey(ctx.params.ukey);
  if (document == undefined) {
    ctx.response.status = 404;
    ctx.response.body = { error: "Document not found" };
    return;
  }

  ctx.response.status = 200;
  ctx.response.body = { ukey: ctx.params.ukey, email: document.email };
}

// update document
export async function documentUpdate(
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

  // check if document exists
  const document = Document.getByUkey(ctx.params.ukey);
  if (document == undefined) {
    ctx.response.status = 404;
    ctx.response.body = { error: "Document not found" };
    return;
  }

  // update document
  document.email = data.value.email;
  if (document.save()) {
    ctx.response.status = 200;
    ctx.response.body = { ukey: ctx.params.ukey, email: document.email };
    return;
  }

  ctx.response.status = 500;
  ctx.response.body = { error: "Server error" };
}

// delete document
export function documentDelete(
  ctx: { params: RouteParams; request: Request; response: Response },
) {
  if (ctx.params == undefined || ctx.params.ukey == undefined) {
    ctx.response.status = 400;
    ctx.response.body = { error: "Invalid data" };
    return;
  }

  // check if document exists
  const document = Document.getByUkey(ctx.params.ukey);
  if (document == undefined) {
    ctx.response.status = 404;
    ctx.response.body = { error: "Document not found" };
    return;
  }

  // delete document
  document.delete();
  ctx.response.status = 200;
  ctx.response.body = {};
}

// hygen starts
console.log("Hygen is awesome");

// hygen ends