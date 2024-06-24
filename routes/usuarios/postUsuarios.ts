import {FastifyInstance, FastifyReply, FastifyRequest} from "fastify";
import {postUsuariosSchema} from "../../services/postUsuariosSchema";

interface PostUsuariosRequest {
    nombre: string;
    email: string;
}

export default async function (fastify: FastifyInstance) {
    fastify.post(
        "/", postUsuariosSchema,
        async function (
            request: FastifyRequest<{Body: PostUsuariosRequest}>,
            reply: FastifyReply
        ) {
            const { nombre, email } = request.body;
            console.log(`Nombre: ${nombre} : ${email}`);
            reply.code(201).send([]);
        }
    );
}