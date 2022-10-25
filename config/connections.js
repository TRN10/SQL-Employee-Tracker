
const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        user: 'root',
        password: 'abc123',
        database: 'employees_db'
    },
    console.log(`Connected to the employees_db database.`)
);

module.exports = db;