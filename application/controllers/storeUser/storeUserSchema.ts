export const storeUserSchema = {
    schema: {
        body: {
            type: "object",
            required: ["nombre", "email"],
            properties: {
                nombre: { type: "string" },
                email: { type: "string" },
            },
            additionalProperties: false,
        },
        response: {
            201: {
                type: "object",
                properties: {
                    id: { type: "string" },
                    nombre: { type: "string" },
                    email: { type: "string" },
                },
            },
            400: {
                type: "object",
                properties: {
                    error: { type: "string" },
                    message: { type: "string" },
                },
            },
            409: {
                type: "object",
                properties: {
                    error: { type: "string" },
                    message: { type: "string" },
                },
            },
            500: {
                type: "object",
                properties: {
                    error: { type: "string" },
                    message: { type: "string" },
                },
            },
        },
    },
};
