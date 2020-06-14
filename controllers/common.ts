// Copyright 2018-2020 Xing Wenju. All rights reserved. MIT license.
// deno-lint-ignore-file
import {
  findRecord,
  addRecord,
  findAllRecord,
  updateRecord,
  deleteRecord,
} from "../services/crud.sql.ts";
import modelMap from "../models/index.ts";
import { helpers, RouterContext, _ } from "../deps.ts";

// @desc    Get all <table>
// @route   GET /api/v1/<table>
const getTableFields = async (ctx: RouterContext) => {
  const query = helpers.getQuery(ctx);

  if (!query.table) {
    ctx.response.status = 201;
    ctx.response.body = {
      success: false,
      msg: "Not table name provided!",
    };
  } else {
    const model = modelMap[query.table];
    const fields = model.modelFields;
    const data = _.map(fields, (i:any) => i['name']);
    ctx.response.body = {
      success: true,
      data,
    };
  }
};

// @desc    Get all <table>
// @route   GET /api/v1/<table>
const getAllFromTable = async (ctx: RouterContext) => {
  const query = helpers.getQuery(ctx);

  if (!query.table) {
    ctx.response.status = 201;
    ctx.response.body = {
      success: false,
      msg: "Not table name provided!",
    };
  } else {
    const data = await findAllRecord(modelMap[query.table]);
    ctx.response.body = {
      success: true,
      data,
    };
  }
};

// @desc    Get single <table>
// @route   GET /api/v1/<table>/:id
const getOneFromTable = async (ctx: RouterContext) => {
  const query = helpers.getQuery(ctx);
  if (!query.table) {
    ctx.response.status = 201;
    ctx.response.body = {
      success: false,
      msg: "Not table name provided!",
    };
  } else {
    const data = await findRecord(modelMap[query.table], { id: ctx.params.id });
    if (data) {
      ctx.response.status = 200;
      ctx.response.body = {
        success: true,
        data: data,
      };
    } else {
      ctx.response.status = 404;
      ctx.response.body = {
        success: false,
        msg: "No found",
      };
    }
  }
};

// @desc    Add <table>
// @route   Post /api/v1/<table>
const addToTable = async (ctx: RouterContext) => {
  const query = helpers.getQuery(ctx);

  if (!query.table) {
    ctx.response.status = 201;
    ctx.response.body = {
      success: false,
      msg: "Not table name provided!",
    };
  } else {
    const body = await ctx.request.body();
    if (!ctx.request.hasBody) {
      ctx.response.status = 400;
      ctx.response.body = {
        success: false,
        msg: "No data",
      };
    } else {
      const id = await addRecord(modelMap[query.table], body.value);
      ctx.response.status = 201;
      ctx.response.body = {
        success: true,
        data: { id },
      };
    }
  }
};

// @desc    Update <table>
// @route   PUT /api/v1/<table>/:id
const updateInTable = async (ctx: RouterContext) => {
  const query = helpers.getQuery(ctx);
  if (!query.table) {
    ctx.response.status = 201;
    ctx.response.body = {
      success: false,
      msg: "Not table name provided!",
    };
  } else {
    const found = await findRecord(
      modelMap[query.table],
      { id: ctx.params.id },
    );
    if (found) {
      const body = await ctx.request.body();
      const data = await updateRecord(
        modelMap[query.table],
        { id: ctx.params.id },
        body.value,
      );
      ctx.response.status = 200;
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
  }
};

// @desc    Delete <table>
// @route   DELETE /api/v1/<table>/:id
const deleteInTable = async (ctx: RouterContext) => {
  const query = helpers.getQuery(ctx);

  if (!query.table) {
    ctx.response.status = 201;
    ctx.response.body = {
      success: false,
      msg: "Not table name provided!",
    };
  } else {
    const count = await deleteRecord(
      modelMap[query.table],
      { id: ctx.params.id },
    );
    ctx.response.body = {
      success: true,
      msg: `${count} deleted `,
    };
  }
};

export {
  getTableFields,
  getAllFromTable,
  getOneFromTable,
  addToTable,
  updateInTable,
  deleteInTable,
};
