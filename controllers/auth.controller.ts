// Copyright 2018-2020 Xing Wenju. All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Controllers
|--------------------------------------------------------------------------
| ------------- //
| CRUD handlers //
| ------------- //
*/
import { Status, compare, makeJwt, hash, Context } from "../deps.ts";
import env from "../config/env.ts";
import { findRecord, addRecord } from "../services/crud.sql.service.ts";
import modelMap from "../models/index.ts";

const userModel = modelMap["users"];

// TODO Normalize model with the [table] query parameter
export async function register(ctx: any) {
  const body = await ctx.request.body();
  console.log(body);

  // FIXEM: password is hashed and needs long string, over 100
  let checkId = await findRecord(userModel, { name: body.value.name });

  if (!checkId) {
    const password = await hash(body.value.password);
    const user = await addRecord(userModel, {
      name: body.value.name,
      email: body.value.email,
      password,
    });

    ctx.response.status = Status.Created;
    ctx.response.type = "json";
    ctx.response.body = {
      status: "success",
      message: `user registered in database`,
      data: {
        user,
      },
    };
  } else {
    ctx.throw(Status.BadRequest, "User name exits!");
  }
}

export async function login(ctx: Context | any) {
  const body = await ctx.request.body();

  // Find record with name
  let user: any = await findRecord(userModel, { name: body.value.name });

  if (user === undefined) {
    ctx.throw(Status.UnprocessableEntity, "Wrong name provided!");
  } else if (await compare(body.value.password, user.password)) {
    const token = makeJwt(
      {
        header: { alg: "HS256", typ: "JWT" },
        payload: { id: user.id, name: user.name, email: user.email },
        key: env["TOKEN_SECRET"],
      },
    );
    // set login status
    // localStorage.setItem('status', '1');
    // response
    ctx.response.status = Status.OK;
    ctx.response.type = "json";
    ctx.response.body = {
      status: "success",
      message: `Logged in with ${body.value.email}`,
      data: { accessToken: token },
    };
    // set redirect
  } else {
    // localStorage.setItem('status', '0');
    ctx.throw(Status.Unauthorized, "Wrong Password!");
  }
}
