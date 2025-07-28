import { dbConfig as conf } from '@gecommerce/config';
import dotenv from 'dotenv';

dotenv.config();

const db = conf.database;

console.log({ db });

// const db = {
//     user: 'nodem',
//     password: 'nodemuser',
//     host: 'localhost',
//     port: 5432,
//     database: 'gecommerce',
// };

export const config = {
    connectionUrl: `postgresql://${db.user}:${db.password}@${db.host}:${db.port}/${db.database}`,
} as const;
