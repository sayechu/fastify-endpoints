import prisma from "../../utils/prisma";
import "@fastify/sensible";
import { FastifyInstance } from "fastify";

interface Usuario {
    id: number;
    nombre: string;
    email: string;
}

export const execute = async (
    fastify: FastifyInstance,
    nombre: string,
    email: string
): Promise<Usuario> => {
    const existingUser = await prisma.user.findUnique({
        where: {
            email: email,
        },
    });
    if (existingUser) {
        throw fastify.httpErrors.conflict(
            "El email proporcionado ya está en uso."
        );
    }
    try {
        return await prisma.user.create({
            data: {
                nombre: nombre,
                email: email,
            },
        });
    } catch (error) {
        throw fastify.httpErrors.internalServerError(
            "Error del servidor al intentar guardar el usuario."
        );
    }
};