import { FastifyReply, FastifyRequest } from "fastify";
import { execute } from "../../../services/getUsuariosService";

interface GetUsuariosRequest {
    id?: number;
    nombre?: string;
    email?: string;
}

export async function getUsersHandler(
    request: FastifyRequest<{ Querystring: GetUsuariosRequest }>,
    reply: FastifyReply
) {
    const { id, nombre, email } = request.query;
    const usuarios = await execute(request.server, id, nombre, email);
    reply.code(200).send(usuarios);
}
