import { FastifyInstance } from "fastify";
import "@fastify/sensible";
import prisma from "../utils/prisma";

interface Usuario {
    id: number;
    nombre: string;
    email: string;
}

const execute = async (
    fastify: FastifyInstance,
    id?: number,
    nombre?: string,
    email?: string
): Promise<Usuario[]> => {
    const usuarios: Usuario[] = await prisma.user.findMany();
    if (!usuarios.length) {
        throw fastify.httpErrors.notFound("No se encontraron usuarios.");
    }
    if (!id && !nombre && !email) {
        return usuarios;
    }

    return usuarios.filter(
        (usuario) =>
            id == usuario.id ||
            nombre === usuario.nombre ||
            email === usuario.email
    );
};

export { execute };
