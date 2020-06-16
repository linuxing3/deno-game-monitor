// server.test.ts
import { Application, Router } from "../../deps.ts";
import { superoak } from "https://deno.land/x/superoak@master/mod.ts";
import {
  userList,
  userCreate,
  userProfile,
  userUpdate,
  userDelete,
} from "../../controllers/user.native.controller.ts";
import User from "../../services/crud.native.service.ts";
// routes
const router = new Router();
router
  .post("/api/user", userCreate)
  .get("/api/user", userList)
  .get<{ ukey: string }>("/api/user/:ukey", userProfile)
  .put<{ ukey: string }>("/api/user/:ukey", userUpdate)
  .delete<{ ukey: string }>("/api/user/:ukey", userDelete);

router.get("/", (ctx) => {
  ctx.response.body = { message: "Hello Deno!" };
  ctx.response.status = 200;
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

/**
 * Test that the server returns the "Hello Deno!" JSON object when make a
 * GET request to "/".
 */
Deno.test("it should return some JSON with status code 200", async () => {
  const request = await superoak(app);
  await request.get("/")
    .expect(200)
    .expect("Content-Type", /json/)
    .expect('{"message":"Hello Deno!"}');
});

/**
 * Test that the server returns error or JSON object when make a
 * GET request to "/api/user".
 */
Deno.test("Oak: it should create a User", async () => {
  await User.create("xingwenju@gmail.com", "20090909");
  const request = await superoak(app);
  await request.get("/api/user")
    .expect(200)
    .expect("Content-Type", /json/)
    .expect(/xingwenju/i, (body) => console.log(body));
});
