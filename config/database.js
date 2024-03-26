import { createPool } from "mysql2/promise";


export const pool = createPool({
    host: "localhost",
    user: "root",
    password: process.env.DB_PASSWORD,
    port: 3306,
    database: process.env.DB_NAME,
});