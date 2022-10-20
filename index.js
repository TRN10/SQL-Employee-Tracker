const mysql = require('mysql2');
const consoleTable = require('console.table');
const inquirer = require('inquirer');

const db = mysql.createConnection(
    {
        user: 'root',
        password: 'abc123',
        database: 'employees_db'
    },
    console.log(`Connected to the employees_db database.`)
);