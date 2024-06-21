"use strict";

const { execute } = require('../../services/getUsuariosService.js');

module.exports = async function (fastify) {
    fastify.get("/", {
        schema: {
            querystring: {
                type: "object",
                properties: {
                    id: { type: "string" },
                    nombre: { type: "string" },
                    email: { type: "string" },
                },
                additionalProperties: false
            },
            response: {
                200: {
                    type: "array",
                    items: {
                        type: "object",
                        properties: {
                            id: { type: "string" },
                            nombre: { type: "string" },
                            email: { type: "string" },
                        },
                        required: ["id", "nombre", "email"],
                    }
                }
            }
        }
    }, async function (request, reply) {
        const { id, nombre, email } = request.query;
        const usuarios = await execute(fastify, id, nombre, email);
        reply.code(200).send(usuarios);
    });
};