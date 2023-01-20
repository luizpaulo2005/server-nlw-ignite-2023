import Fastify from "fastify";
import cors from "@fastify/cors";
import { appRoutes } from "./lib/routes";

const app = Fastify();

app.register(cors);
app.register(appRoutes)

app.listen({
    port: 3000,
    host: '192.168.1.107'
  }).then(() => {
    console.log("Server running at http://localhost:3000/");
  });
