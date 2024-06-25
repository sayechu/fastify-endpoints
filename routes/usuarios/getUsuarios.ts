import { FastifyInstance } from "fastify";
import { getUsersSchema } from "../../application/controllers/getUsers/getUsersSchema";
import { getUsersHandler } from "../../application/controllers/getUsers/getUsersController";

export default async function (fastify: FastifyInstance) {
    fastify.get("/", getUsersSchema, getUsersHandler);
}
