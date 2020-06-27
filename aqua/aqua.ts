import Aqua from "https://deno.land/x/aqua/aqua.ts";

const app = new Aqua(3100);

app.get("/", (req) => {
  return "Hello, World!";
});

app.register((req, response) => {
  return response;
});
