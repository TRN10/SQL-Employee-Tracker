// import required node modules
const mysql = require('mysql2');
const consoleTable = require('console.table');
const inquirer = require('inquirer');
// const viewDepartment = require('./helpers/utils.js');
// const viewRoles = require('./helpers/utils.js');
// const viewEmployees = require('./helpers/utils.js');
// const initialPrompt = require('./helpers/utils.js');
const { viewDepartment(), viewRoles(), viewEmployees(), initialPrompt() } = require('./helpers/utils.js');

// create connection to database
const db = mysql.createConnection(
    {
        user: 'root',
        password: 'abc123',
        database: 'employees_db'
    },
    console.log(`Connected to the employees_db database.`)
);

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

// function to initialise app
function init() {

    initialPrompt();

}



// call function to initialise app
init();

module.exports = db;
