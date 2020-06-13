import { Context } from "../deps.ts";
import {
  findRecord,
  addRecord,
  findAllRecord,
  updateRecord,
  deleteRecord,
} from "../services/crud.sql.ts";

import models from "../models/index.ts";

// @desc    Get all <table>
// @route   GET /api/v1/<table>
const getAll = async (ctx: Context) => {
  const table = await ctx.request.headers.get('table') as string;
  const data = await findAllRecord(models[table]);
  ctx.response.body = {
    success: true,
    data,
  }
};

// @desc    Get single <model>
// @route   GET /api/v1/<table>
const getOne = async (ctx: any) => {
  const table = await ctx.request.headers.get('table') as string;
  const data = await findRecord(models[table], {id: ctx.params.id});
  if (data) {
    ctx.response.status = 200;
    ctx.response.body = {
      success: true,
      data,
    };
  } else {
    ctx.response.status = 404;
    ctx.response.body = {
      success: false,
      msg: `No ${table} found`,
      data
    };
  }
};

// @desc    Add <model>
// @route   Post /api/v1/<table>
const add = async (ctx: Context) => {
  const body = await ctx.request.body();
  const table = await ctx.request.headers.get('table') as string;
  const data = await addRecord(models[table], body.value);
  ctx.response.status = 201;
  ctx.response.body = {
    success: true,
    data,
  };
};

// @desc    Update <model>
// @route   PUT /api/v1/<table>
const update = async (ctx: any) => {
  const body = await ctx.request.body();
  const table = await ctx.request.headers.get('table') as string;
  const data = await updateRecord(models[table], { id: ctx.params.id }, body.value );
  if (data) {
    ctx.response.status = 201;
    ctx.response.body = {
      success: true,
      data,
    };
  } else {
    ctx.response.status = 404;
    ctx.response.body = {
      success: false,
      msg: "Not found",
    };
  }
};

// @desc    Delete <model>
// @route   DELETE /api/v1/<table>
const deleteOneOrMore = async (ctx: any) => {
  const table = await ctx.request.headers.get('table') as string;
  const data = await deleteRecord(models[table], {id: ctx.params.id});
  ctx.response.body = {
    success: true,
    msg: `Successfully deleted `,
    data
  };
};

export { getAll, getOne, add, update, deleteOneOrMore };
