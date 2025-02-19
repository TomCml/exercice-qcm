import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

const sqldb = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: process.env.SQL_PASSWORD,
    database: 'exercice_qcm'
});

export default sqldb;