import { Knex } from "knex";

const config: Knex.Config = {
    client: "pg",
    connection: {
        host: "127.0.0.1",
        user: "root",
        password: "password",
        database: "mydb",
    },
    migrations: {
        directory: "./migrations",
    },
};

export default config;
