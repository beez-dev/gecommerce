import { Knex } from 'knex';
import { config } from './config';

const knexConfig: { [key: string]: Knex.Config } = {
    development: {
        client: 'postgresql',
        connection: config.database,
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            directory: './migrations',
            extension: 'ts',
            loadExtensions: ['.ts'],
        },
        seeds: {
            directory: './seeds',
        },
    },

    staging: {
        client: 'postgresql',
        connection: config.database,
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            directory: './migrations',
            extension: 'ts',
            loadExtensions: ['.ts'],
        },
        seeds: {
            directory: './seeds',
        },
    },

    production: {
        client: 'postgresql',
        connection: config.database,
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            directory: './migrations',
            extension: 'ts',
            loadExtensions: ['.ts'],
        },
        seeds: {
            directory: './seeds',
        },
    },
};

export default knexConfig;
