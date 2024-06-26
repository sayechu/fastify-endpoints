import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("usuarios", (table) => {
        table.increments("id").primary();
        table.text("nombre").notNullable();
        table.text("email").notNullable();

        table.unique(["email"], "usuario_email_key");
    });
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("usuarios");
}
