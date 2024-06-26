import { FastifyInstance } from "fastify";
import sensible from "@fastify/sensible";
import usuariosRoutes from "./routes/routes";
import swagger from "@fastify/swagger";
import swaggerUI from "@fastify/swagger-ui";

export default async function (fastify: FastifyInstance) {
    fastify.register(swagger);
    fastify.register(swaggerUI, {
        staticCSP: true,
    });
    fastify.register(sensible);
    fastify.register(usuariosRoutes);
}
