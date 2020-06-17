// Copyright 2018-2020 Xing Wenju. All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Controllers
|--------------------------------------------------------------------------
|
| CRUD handlers without seperate services
| Using the [ModelClass] binded to the context
|
*/
import { Where, BaseModel, RouterContext, _ } from "../deps.ts";

interface RouterContextWithModel extends RouterContext {
  model: BaseModel;
}

// @desc    Get all <table>
// @route   GET /api/v1/<table>
const getTableFields = async (ctx: RouterContextWithModel) => {
  const Model: BaseModel = ctx.model;
  const data = _.map(Model.modelFields, (item: any) => item["name"]);
  ctx.response.body = {
    success: true,
    data,
  };
};

// @desc    Get all <table>
// @route   GET /api/v1/<table>
const getAllFromTable = async (ctx: RouterContextWithModel) => {
  const Model: BaseModel = ctx.model;
  const data = await Model.findAll(Where.expr("id > 0"));
  ctx.response.body = {
    success: true,
    data,
  };
};

// @desc    Get single <table>
// @route   GET /api/v1/<table>/:id
const getOneFromTable = async (ctx: RouterContextWithModel) => {
  const Model: BaseModel = ctx.model;
  const id = ctx.params.id as string;
  const data = await Model.findById(id);
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
      msg: "No found",
    };
  }
};

// @desc    Add <table>
// @route   Post /api/v1/<table>
const addToTable = async (ctx: RouterContextWithModel) => {
  const Model: BaseModel = ctx.model;
  if (!ctx.request.hasBody) {
    ctx.response.status = 400;
    ctx.response.body = {
      success: false,
      msg: "No data",
    };
  } else {
    const body = await ctx.request.body();
    const id = await Model.insert(body.value);
    ctx.response.status = 201;
    ctx.response.body = {
      success: true,
      data: { id },
    };
  }
};

// @desc    Update <table>
// @route   PUT /api/v1/<table>/:id
const updateInTable = async (ctx: RouterContextWithModel) => {
  const Model: BaseModel = ctx.model;
  if (!ctx.request.hasBody) {
    ctx.response.status = 400;
    ctx.response.body = {
      success: false,
      msg: "No data",
    };
  } else {
    const body = await ctx.request.body();
    const data = await Model.update(
      body.value,
      Where.from({ id: ctx.params.id }),
    );
    ctx.response.status = 200;
    ctx.response.body = {
      success: true,
      data,
    };
  }
};

// @desc    Delete <table>
// @route   DELETE /api/v1/<table>/:id
const deleteInTable = async (ctx: RouterContextWithModel) => {
  const Model: BaseModel = ctx.model;
  const count = await Model.delete(Where.from({ id: ctx.params.id }));
  ctx.response.body = {
    success: true,
    msg: `${count} deleted`,
  };
};

export {
  getTableFields,
  getAllFromTable,
  getOneFromTable,
  addToTable,
  updateInTable,
  deleteInTable,
};
