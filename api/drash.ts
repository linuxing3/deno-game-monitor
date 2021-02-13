import { Drash } from "https://deno.land/x/drash@v1.3.1/mod.ts";

import HomeResource from "./home_resource.ts";

class UserResource extends Drash.Http.Resource {
  static paths = ["/user/:name"];
  public GET() {
    const name = this.request.getPathParam("name");
    this.response.body = `Hello ${name}!`;
    return this.response;
  }
}

const server = new Drash.Http.Server({
  response_output: "text/html",
  resources: [HomeResource, UserResource]
});

server.run({
  hostname: "localhost",
  port: 1447
});