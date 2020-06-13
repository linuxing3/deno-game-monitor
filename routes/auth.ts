import { Router } from "../deps.ts";

import { register, login } from "../controllers/auth.ts";
import { getOne, getAll, update, deleteOneOrMore } from "../controllers/common.ts";

const router = new Router();

router.post("/auth/register", register)
  .post("/auth/login", login);

router.get('/api/v1/user', getAll)
  .get('/api/v1/user/:id', getOne)
  .put('/api/v1/user/:id', update)
  .delete('/api/v1/user/:id', deleteOneOrMore);

export default router;
