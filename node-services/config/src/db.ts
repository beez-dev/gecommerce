import dotenv from 'dotenv';

dotenv.config();

export interface DatabaseConfig {
    host: string;
    port: number;
    database: string;
    user: string;
    password: string;
}

const config = () => {
    return {
        database: {
            host: process.env.DB_HOST || 'localhost',
            port: parseInt(process.env.DB_PORT || '5432', 10),
            database: process.env.DB_NAME || 'gecommerce',
            user: process.env.DB_USER || process.env.DB_USERNAME || 'postgres',
            password:
                process.env.DB_PASSWORD || process.env.DB_PWD || 'password',
        },
    };
};

export { config };
