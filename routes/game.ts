// Copyright 2018-2020 Xing Wenju. All rights reserved. MIT license.
// deno-lint-ignore-file
import { Router } from "../deps.ts";
import {
  getAllFromTable,
  getOneFromTable,
  updateInTable,
  deleteInTable,
  addToTable,
} from "../controllers/common.ts";
import authorize from "../middleware/authorize.ts";

const router = new Router();

router.get("/api/v1/games", getAllFromTable)
  .get("/api/v1/games/:id", getOneFromTable)
  .post("/api/v1/games", addToTable)
  .put("/api/v1/games/:id", updateInTable)
  .delete("/api/v1/games/:id", deleteInTable);

export default router;
