import Fastify from "fastify";
import { PrismaClient } from "@prisma/client";
import cors from "@fastify/cors";


const app = Fastify();
const prisma = new PrismaClient();

app.register(cors);

app.get("/habits", async () => {
  const habits = await prisma.habit.findMany();

  return habits;
});

app.listen({
    port: 3000,
  }).then(() => {
    console.log("Server running at http://localhost:3000/");
  });
