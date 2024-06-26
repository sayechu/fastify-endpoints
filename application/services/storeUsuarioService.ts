import "@fastify/sensible";
import { FastifyInstance } from "fastify";
import knex from "knex";
import config from "../../knexfile";

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
    const existingUser = await knex(config)("usuarios")
        .select("*")
        .where("email", email);
    if (existingUser.length > 0) {
        throw fastify.httpErrors.conflict(
            "El email proporcionado ya está en uso."
        );
    }
    try {
        const [newUser] = await knex(config)("usuarios")
            .insert({
                nombre: nombre,
                email: email,
            })
            .returning("*");
        return newUser;
    } catch (error) {
        throw fastify.httpErrors.internalServerError(
            "Error del servidor al intentar guardar el usuario."
        );
    }
};
