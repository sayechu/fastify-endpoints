import { FastifyInstance } from "fastify";
import { getUsersSchema } from "../application/controllers/getUsers/getUsersSchema";
import { getUsersHandler } from "../application/controllers/getUsers/getUsersController";
import { storeUserSchema } from "../application/controllers/storeUser/storeUserSchema";
import { storeUserHandler } from "../application/controllers/storeUser/storeUserController";

export default async function (fastify: FastifyInstance) {
    fastify.get("/usuarios", getUsersSchema, getUsersHandler);
    fastify.post("/usuarios", storeUserSchema, storeUserHandler);
}
