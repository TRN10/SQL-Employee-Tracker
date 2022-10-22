const db = require('..index.js');
const { default: inquirer } = require('inquirer');

function viewDepartment() {
    db.query('SELECT * FROM department', function (err, results) {
        console.log(results);
    });
}

function viewRoles() {
    db.query('SELECT * FROM role', function (err, results) {
        console.log(results);
    });
}

function viewEmployees() {
    db.query('SELECT * FROM employee', function (err, results) {
        console.log(results);
    });
}

function addNewDepartment() {
    inquirer.prompt(addDepartment).then((addDepartmentResponse) => {
        const sql = `INSERT INTO department(name)
        VALUES(${addDepartmentResponse})`;
    });
}