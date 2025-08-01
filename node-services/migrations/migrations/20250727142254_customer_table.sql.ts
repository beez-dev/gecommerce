import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
    // language=SQL format=false
    await knex.raw(`
        CREATE TABLE customer (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            first_name VARCHAR NOT NULL,
            last_name VARCHAR NOT NULL,
            email VARCHAR NOT NULL UNIQUE,
            phone_number VARCHAR NOT NULL,
            address_id UUID REFERENCES address (id)
        );
    `);
}

export async function down(knex: Knex): Promise<void> {
    // language=SQL format=false
    await knex.raw(`
        DROP TABLE customer
    `);
}
