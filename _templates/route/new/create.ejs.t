---
to: routes/<%= name%>.router.ts
---
// Copyright 2018-2020 Xing Wenju. All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Route: <%= name %>
|--------------------------------------------------------------------------
*/
import { Router } from "../deps.ts";
import {
  getAllFromTable,
  getOneFromTable,
  updateInTable,
  deleteInTable,
  addToTable,
} from "../controllers/common.ts";

const router = new Router();

router.get("/api/v1/<%= name %>", getAllFromTable)
  .get("/api/v1/<%= name %>/:id", getOneFromTable)
  .post("/api/v1/<%= name %>", addToTable)
  .put("/api/v1/<%= name %>/:id", updateInTable)
  .delete("/api/v1/<%= name %>/:id", deleteInTable);

export default router;
