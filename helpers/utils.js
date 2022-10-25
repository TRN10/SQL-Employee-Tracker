const db = require('../config/connections');
const inquirer = require('inquirer');

//inquirer questions
const initialOptions = [
    {
        type: 'list',
        name: 'options',
        message: 'What would you like to do?',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'Exit'],
    }
];

const addDepartment = [
    {
        type: 'input',
        name: 'department',
        message: 'What is the name of the department?',
    }
];

const addRole = [
    {
        type: 'input',
        name: 'roleName',
        message: 'What is the name of the role?',
    },
    {
        type: 'input',
        name: 'salary',
        message: 'What is the salary for the role?',
    },
    {
        type: 'input',
        name: 'roleDepartment',
        message: 'What department is the role within?',
    },
];

const addEmployee = [
    {
        type: 'input',
        name: 'firstName',
        message: 'What is the employees first name?',
    },
    {
        type: 'input',
        name: 'lastName',
        message: 'What is the employees last name?',
    },
    {
        type: 'input',
        name: 'employeeRole',
        message: "What is the employee's role?",
    },
    {
        type: 'input',
        name: 'managersId',
        message: "What is the ID of the employee's manager?",
    },
];

// utility functions to interact with sql
function viewDepartment() {
    db.query('SELECT * FROM department', function (err, results) {
        if (err) {
            console.error(err);
            return;
        }
        console.table(results);
        initialPrompt();
    });
}

function viewRoles() {
    db.query('SELECT * FROM role', function (err, results) {
        if (err) {
            console.error(err);
            return;
        }
        console.table(results);
        initialPrompt();
    });
}

function viewEmployees() {
    db.query('SELECT * FROM employee', function (err, results) {
        if (err) {
            console.error(err);
            return;
        }
        console.table(results);
        initialPrompt();
    });
}

function addNewDepartment() {
    inquirer.prompt(addDepartment).then((addDepartmentResponse) => {
        const sql = `INSERT INTO department (name) VALUES (?)`;
        const params = addDepartmentResponse.department;
        db.query(sql, params, (err, result) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log(addDepartmentResponse.department);
            console.table(result);
            initialPrompt();
        })
    });
}

function addNewEmployee() {
    inquirer.prompt(addEmployee).then((addEmployeeResponse) => {
        const sql = `INSERT INTO employee(first_name, last_name) VALUES (?, ?)`;
        const params = [addEmployeeResponse.firstName, addEmployeeResponse.lastName];
        db.query(sql, addEmployeeResponse, (err, result) => {
            if (err) {
                console.error(err);
                return;
            }
            console.table(result);
            initialPrompt();
        })
    });
}

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

module.exports = { initialPrompt }
