// @deno-types="https://deno.land/x/types/react/v16.13.1/react.d.ts"
// @deno-types="https://deno.land/x/types/react-dom/v16.13.1/server.d.ts"
import { Router } from "../deps.ts";
import { register, login } from "../controllers/auth.ts";
import {
  getUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
} from "../controllers/user.ts";
import authorize from "../middleware/authorize.ts";

const router = new Router();

router.post("/auth/register", register)
  .post("/auth/login", login);

router.get("/api/v1/users", getUsers)
  .get("/api/v1/users", getUser)
  .post("/api/v1/users", register)
  .put("/api/v1/users", updateUser)
  .delete("/api/v1/users", deleteUser);

export default router;
