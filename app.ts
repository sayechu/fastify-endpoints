import { FastifyInstance } from "fastify";
import sensible from "@fastify/sensible";
import usuariosRoutes from "./routes/routes";

export default async function (fastify: FastifyInstance) {
    fastify.register(sensible);
    fastify.register(usuariosRoutes);
}
