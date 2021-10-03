// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');

//**example also has 'Internal modules', are those needed for this project? */

// TODO: Create an array of questions for user input
const questions = [
    
    {
        type: 'input',
        message: "Please provide a descritption of the application",
        name: 'description',
        default: 'description',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("No descritption provided");
            }
            return true;
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
