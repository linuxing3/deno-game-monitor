// Copyright 2018-2020 Xing Wenju. All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Game Router
|--------------------------------------------------------------------------
| Using [model] middleware to bind [ModelClass] the context
|
*/
import { Router } from "../deps.ts";
import {
  getAllFromTable,
  getOneFromTable,
  updateInTable,
  deleteInTable,
  addToTable,
} from "../controllers/common.standalone.controller.ts";
import model from "../middleware/model.middleware.ts";

const router = new Router();

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
| Using [model] middleware before controller methods.
|
*/
router.get("/api/v1/games", model, getAllFromTable)
  .get("/api/v1/games/:id", model, getOneFromTable)
  .post("/api/v1/games", model, addToTable)
  .put("/api/v1/games/:id", model, updateInTable)
  .delete("/api/v1/games/:id", model, deleteInTable);

export default router;
