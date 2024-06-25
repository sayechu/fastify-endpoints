import { FastifyReply, FastifyRequest } from "fastify";
import { execute } from "../../../services/postUsuariosService";

interface PostUsuarioBody {
    nombre: string;
    email: string;
}

export async function storeUserHandler(
    request: FastifyRequest<{ Body: PostUsuarioBody }>,
    reply: FastifyReply
) {
    const { nombre, email } = request.body;
    const usuarioCreado = await execute(request.server, nombre, email);
    reply.code(201).send(usuarioCreado);
}
