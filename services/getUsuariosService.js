const execute = async(id, nombre, email) => {
    const usuarios = [
        {id: 1, nombre: "juan", email: "juan@gmail.com"},
        {id: 2, nombre: "juanlopez", email: "juanlopez@gmail.com"},
    ];

    if (!id && !nombre && !email) {
        return usuarios;
    }

    return usuarios.filter(usuario => id == usuario.id
        || nombre == usuario.nombre
        || email == usuario.email
    );
}

module.exports = { execute };