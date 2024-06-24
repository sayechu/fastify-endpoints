import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { execute } from "../../services/getUsuariosService";
import { getUsuariosSchema } from "../../services/getUsuariosSchema";

interface GetUsuariosRequest {
    id?: string;
    nombre?: string;
    email?: string;
}

export default async function (fastify: FastifyInstance) {
    fastify.get(
        "/",
        getUsuariosSchema,
        async function (
            request: FastifyRequest<{ Querystring: GetUsuariosRequest }>,
            reply: FastifyReply
        ) {
            const { id, nombre, email } = request.query;
            const usuarios = await execute(fastify, id, nombre, email);
            reply.code(200).send(usuarios);
        }
    );
}
