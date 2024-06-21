const execute = async (fastify, id, nombre, email) => {
    const usuarios = [
        { id: 1, nombre: "juan", email: "juan@gmail.com" },
        { id: 2, nombre: "juanlopez", email: "juanlopez@gmail.com" },
    ];
    if (!usuarios.length) {
        throw fastify.httpErrors.notFound("No se encontraron usuarios.");
    }
    if (!id && !nombre && !email) {
        return usuarios;
    }

    return usuarios.filter(
        (usuario) =>
            id == usuario.id ||
            nombre == usuario.nombre ||
            email == usuario.email
    );
};

module.exports = { execute };