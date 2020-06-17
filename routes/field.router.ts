// deno-lint-ignore-file
// @deno-types="https://deno.land/x/types/react/v16.13.1/react.d.ts"
// @deno-types="https://deno.land/x/types/react-dom/v16.13.1/server.d.ts"
/*
|--------------------------------------------------------------------------
| Router: fields v1
|--------------------------------------------------------------------------
|
| get fields of a Model
|
*/
import { Router } from "../deps.ts";
import {
  getTableFields,
} from "../controllers/common.controller.ts";

const router = new Router();

router.get("/api/v1/fields", getTableFields);

export default router;
