import { Knex } from 'knex';
import { config } from './config';

const knexConfig: { [key: string]: Knex.Config } = {
    development: {
        client: 'postgresql',
        connection: config.connectionUrl,
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            directory: './migrations',
        },
        seeds: {
            directory: './seeds',
        },
    },

    production: {
        client: 'postgresql',
        connection: config.connectionUrl,
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            directory: './migrations',
            extension: 'sql',
            loadExtensions: ['.sql'],
        },
        seeds: {
            directory: './seeds',
        },
    },
};

export default knexConfig;
