export const getUsuariosSchema = {
    schema: {
        querystring: {
            type: "object",
            properties: {
                id: { type: "string" },
                nombre: { type: "string" },
                email: { type: "string" },
            },
            additionalProperties: false,
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
                },
            },
        },
    },
};
