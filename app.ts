import { Drash } from "./deps.ts";
import HomeResource from "./resources/home_resource.ts";
import UserResource from './resources/users_resource.ts';

const server = new Drash.Http.Server({
  directory: Deno.realPathSync("./"),
  response_output: "application/json",
  logger: new Drash.CoreLoggers.ConsoleLogger({
    enabled: false,
    level: "debug",
  }),
  resources: [
    HomeResource,
    UserResource
  ],
});

await server.run({
  hostname: "localhost",
  port: 3000,
});

console.log(`Server listening: http://${server.hostname}:${server.port}`);
