import { Router } from "../deps.ts";

import { register, login } from "../controllers/auth.ts";

const router = new Router();

router.post("/auth/register", register)
  .post("/auth/login", login);

router.get("/user/register", register);

export default router;
