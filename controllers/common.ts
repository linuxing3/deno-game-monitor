import {
  findRecord,
  addRecord,
  findAllRecord,
  updateRecord,
  deleteRecord,
} from "../services/crud.sql.ts";

import models from "../models/index.ts";

// @desc    Get all games
// @route   GET /api/v1/games
const findAll = async ({ request, response }: { request: any; response: any }) => {
  const query = request.body().value;
  const data = findAllRecord(models[query.table]);
  response.body = {
    success: true,
    data,
  }
};

// @desc    Get single game
// @route   GET /api/v1/games/:id
const findOne = async (
  { params, response }: { params: { id: string }; response: any },
) => {
  const data = findRecord(models[query.table], params);
  if (data) {
    response.status = 200;
    response.body = {
      success: true,
      data,
    };
  } else {
    response.status = 404;
    response.body = {
      success: false,
      msg: "No game found",
    };
  }
};

// @desc    Add game
// @route   Post /api/v1/games
const add = async (
  { request, response }: { request: any; response: any },
) => {
  const query = Request.body().value;
  const data = await addRecord(models[query.table], query);
  response.status = 201;
  response.body = {
    success: true,
    data,
  };
};

// @desc    Update game
// @route   PUT /api/v1/games/:id
const update = async (
  { request, response }: {
    request: any;
    response: any;
  },
) => {
  const query = request.body().value;
  const data = await updateRecord(models[query.table], query);
  if (data) {
    response.status = 201;
    response.body = {
      success: true,
      data,
    };
  } else {
    response.status = 404;
    response.body = {
      success: false,
      msg: "Not found",
    };
  }
};

// @desc    Delete game
// @route   DELETE /api/v1/games/:id
const deleteOne = async (
  { params, response }: { params: { id: string }; response: any },
) => {
  const data = await deleteRecord(models[query.table], params);
  response.body = {
    success: true,
    msg: `Successfully deleted `,
  };
};

export { getGames, getGame, addGame, updateGame, deleteGame };
