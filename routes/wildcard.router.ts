// Copyright 2018-2020 Xing Wenju. All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Router: Wildcard v1
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
import model from "../middleware/param.model.middleware.ts";

const router = new Router();

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
| Using [param.model] middleware before controller methods.
| Get Model from param [table]
|
*/
router.get("/api/v1/:table", model, getAllFromTable)
  .get("/api/v1/:table/:id", model, getOneFromTable)
  .post("/api/v1/:table", model, addToTable)
  .put("/api/v1/:table/:id", model, updateInTable)
  .delete("/api/v1/:table/:id", model, deleteInTable);

export default router;
