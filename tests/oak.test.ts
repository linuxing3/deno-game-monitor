// server.test.ts
import { Application, Router } from "https://deno.land/x/oak@master/mod.ts";
import { superoak } from "https://deno.land/x/superoak@master/mod.ts";

const router = new Router();
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
