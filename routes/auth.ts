// deno-lint-ignore-file
// @deno-types="https://deno.land/x/types/react/v16.13.1/react.d.ts"
// @deno-types="https://deno.land/x/types/react-dom/v16.13.1/server.d.ts"
import { Router } from "../deps.ts";
import { register, login } from "../controllers/auth.ts";
import {
  getAllFromTable,
  getOneFromTable,
  updateInTable,
  deleteInTable,
  addToTable,
} from "../controllers/common.ts";
import authorize from "../middleware/authorize.ts";

const router = new Router();

router.post("/auth/register", register)
  .post("/auth/login", login)
  .get("/api/v1/users", getAllFromTable)
  .get("/api/v1/users/:id", getOneFromTable)
  .post("/api/v1/users", addToTable)
  .put("/api/v1/users/:id", updateInTable)
  .delete("/api/v1/users/:id", deleteInTable);

export default router;
