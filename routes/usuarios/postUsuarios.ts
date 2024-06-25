import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { postUsuariosSchema } from "../../services/postUsuariosSchema";
import { execute } from "../../services/postUsuariosService";

interface PostUsuarioBody {
    nombre: string;
    email: string;
}

export default async function (fastify: FastifyInstance) {
    fastify.post(
        "/",
        postUsuariosSchema,
        async function (
            request: FastifyRequest<{ Body: PostUsuarioBody }>,
            reply: FastifyReply
        ) {
            const { nombre, email } = request.body;
            const usuarioCreado = await execute(fastify, nombre, email);
            reply.code(201).send(usuarioCreado);
        }
    );
}
