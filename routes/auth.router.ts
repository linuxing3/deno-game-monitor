// deno-lint-ignore-file
// @deno-types="https://deno.land/x/types/react/v16.13.1/react.d.ts"
// @deno-types="https://deno.land/x/types/react-dom/v16.13.1/server.d.ts"
/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
*/
import { Router } from "../deps.ts";
import { register, login } from "../controllers/auth.controller.ts";
import {
  getAllFromTable,
  getOneFromTable,
  updateInTable,
  deleteInTable,
  addToTable,
} from "../controllers/common.controller.ts";
import authorize from "../middleware/authorize.middleware.ts";

const router = new Router();

router.post("/auth/register", register)
  .post("/auth/login", login)
  .get("/api/v1/users", authorize, getAllFromTable)
  .get("/api/v1/users/:id", authorize, getOneFromTable)
  .post("/api/v1/users", authorize, addToTable)
  .put("/api/v1/users/:id", authorize, updateInTable)
  .delete("/api/v1/users/:id", authorize, deleteInTable);

export default router;
