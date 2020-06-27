import { App, Request, Response } from "https://deno.land/x/attain/mod.ts";

const app = new App();

const sampleMiddleware = (req: Request, res: Response) => {
  console.log("before send");
};

app.get("/:id", (req, res) => {
  console.log(req.params);
  res.status(200).send(`id: ${req.params.id}`);
});

app.use(sampleMiddleware, (req, res) => {
  res.status(200).send({ status: "Good" });
});

app.listen({ port: 3500 });

console.log("http://localhost:3500");
