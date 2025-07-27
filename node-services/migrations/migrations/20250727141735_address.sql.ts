import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
    // language=SQL format=false
    await knex.raw(`
        CREATE TABLE address (
            id PRIMARY KEY DEFAULT gen_random_uuid(),
            street TEXT,
            zipcode TEXT,
            country TEXT
        );
    `);
}

export async function down(knex: Knex): Promise<void> {
    // language=SQL format=false
    await knex.raw(`
        DROP TABLE address
    `);
}
