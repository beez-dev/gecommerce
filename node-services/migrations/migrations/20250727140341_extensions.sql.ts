import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
    // language=SQL format=false
    await knex.raw(`
        CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
    `);
}

export async function down(knex: Knex): Promise<void> {
    // language=SQL format=false
    await knex.raw(`
        DROP EXTENSION IF EXISTS "uuid-ossp";
    `);
}
