import { FastifyInstance } from "fastify";
import "@fastify/sensible";
import prisma from "../../utils/prisma";

interface Usuario {
    id: number;
    nombre: string;
    email: string;
}

export const execute = async (
    fastify: FastifyInstance,
    id?: number,
    nombre?: string,
    email?: string
): Promise<Usuario[]> => {
    let usuarios: Usuario[];
    try {
        usuarios = await prisma.user.findMany();
    } catch (error) {
        throw fastify.httpErrors.internalServerError(
            "Error del servidor al intentar recuperar los usuarios."
        );
    }
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
