require('dotenv').config();
import mysql from 'mysql';
import { promisify } from 'util';

const config = {
    port: process.env.PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
};

export async function createConnection() {
    const connection = await mysql.createConnection(config);
    return {
        escape(arg) {
            return connection.escape(arg);
        },
        query(sql, args) {
            return promisify(connection.query).call(connection, sql, args);
        },
        done() {
            return promisify(connection.end).call(connection);
        }
    };
}
