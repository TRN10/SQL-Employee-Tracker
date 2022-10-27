// import required node modules
const mysql = require('mysql2');
const consoleTable = require('console.table');
const { initialPrompt } = require('./helpers/utils.js');


// function to initialise app
function init() {
    initialPrompt();
}

// call function to initialise app
init();


