import { FastifyInstance } from "fastify";

interface Usuario {
    id: string;
    nombre: string;
    email: string;
}

const execute = async (
    fastify: FastifyInstance,
    nombre: string,
    email: string
): Promise<Usuario> => {
    return { id: "20", nombre: nombre, email: email };
};

export { execute };
