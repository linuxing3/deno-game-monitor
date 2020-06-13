import { Router } from "../deps.ts";

import { getOne, getAll, update, deleteOneOrMore, add } from "../controllers/common.ts";

const router = new Router();

router.post('/api/v1/document', add)

router.get('/api/v1/document', getAll)
  .get('/api/v1/document/:id', getOne)
  .put('/api/v1/document/:id', update)
  .delete('/api/v1/document/:id', deleteOneOrMore);

export default router;
