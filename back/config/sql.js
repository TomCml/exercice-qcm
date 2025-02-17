const mysql = require ("mysql2");


const sqldb = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: process.env.SQL_PASSWORD,
    database: 'exercice_qcm'
});