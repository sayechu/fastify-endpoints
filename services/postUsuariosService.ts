import { FastifyInstance } from "fastify";
import prisma from "../utils/prisma";

interface Usuario {
    id: number;
    nombre: string;
    email: string;
}

const execute = async (nombre: string, email: string): Promise<Usuario> => {
    const newUser: Usuario = await prisma.user.create({
        data: {
            nombre: nombre,
            email: email,
        },
    });
    return newUser;
};

export { execute };
