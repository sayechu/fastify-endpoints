import { FastifyInstance } from "fastify";
import { storeUserSchema } from "../../application/controllers/storeUser/storeUserSchema";
import { storeUserHandler } from "../../application/controllers/storeUser/storeUserController";

export default async function (fastify: FastifyInstance) {
    fastify.post("/", storeUserSchema, storeUserHandler);
}
