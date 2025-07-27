import { dbConfig as conf } from '@gecommerce/config';

const db = conf.database;

console.log({ db });

export const config = {
    connectionUrl: `postgresql://${db.user}:${db.password}@${db.host}:${db.port}/${db.database}`,
} as const;
