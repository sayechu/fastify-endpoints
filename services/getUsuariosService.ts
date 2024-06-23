import { FastifyInstance } from "fastify";
import "@fastify/sensible";

interface Usuario {
    id: string;
    nombre: string;
    email: string;
}

const execute = async (
    fastify: FastifyInstance,
    id?: string,
    nombre?: string,
    email?: string
): Promise<Usuario[]> => {
    const usuarios: Usuario[] = [
        { id: "1", nombre: "juan", email: "juan@gmail.com" },
        { id: "2", nombre: "juanlopez", email: "juanlopez@gmail.com" },
        { id: "3", nombre: "juan", email: "juan@gmail.com" },
    ];
    if (!usuarios.length) {
        throw fastify.httpErrors.notFound("No se encontraron usuarios.");
    }
    if (!id && !nombre && !email) {
        return usuarios;
    }

    return usuarios.filter(
        (usuario) =>
            id === usuario.id ||
            nombre === usuario.nombre ||
            email === usuario.email
    );
};

export { execute };
