const db = require('../index.js');
const { default: inquirer } = require('inquirer');

// utility functions to interact with sql
function viewDepartment() {
    db.query('SELECT * FROM department', function (err, results) {
        console.table(results);
    });
}

function viewRoles() {
    db.query('SELECT * FROM role', function (err, results) {
        console.table(results);
        initialPrompt();
    });
}

function viewEmployees() {
    db.query('SELECT * FROM employee', function (err, results) {
        console.table(results);
        initialPrompt();
    });
}

function addNewDepartment() {
    inquirer.prompt(addDepartment).then((addDepartmentResponse) => {
        const sql = `INSERT INTO department(name)
        VALUES`;
        const params = addDepartmentResponse.department;
        db.query(sql, params, (err, result) => {
            console.log(addDepartmentResponse.department);
            console.table(result);
            initialPrompt();
        })
    });
}

// function addNewEmployee() {
//     inquirer.prompt(addEmployee).then((addEmployeeResponse) => {
//         const sql = `INSERT INTO employee(first_name, last_name)
//         VALUES`;
//         const params = addEmployeeResponse.firstName, addEmployeeResponse.lastName;
//         db.query(sql, addEmployeeResponse, (err, result) => {

//             console.table(result);
//             initialPrompt();
//         })
//     });
// }

function initialPrompt() {
    inquirer.prompt(initialOptions).then((initialResponses) => {
        console.log(initialResponses);
        const options = initialResponses.options;

        if (options === 'View all departments') {
            viewDepartment();
        } else if (options === 'View all roles') {
            viewRoles();
        } else if (options === 'View all employees') {
            viewEmployees();
        } else if (options === 'Add a department') {
            addNewDepartment();
        } else if (options === 'Add a role') {
            addNewRole();
        } else if (options === 'Add an employee') {
            addNewEmployee();
        } else if (options === 'Update an employee role') {
            updateRole();
        } else {
            return;
        }

    })
};

module.exports = { viewDepartment, viewRoles, viewEmployees, initialPrompt }
