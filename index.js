// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown')

//**example also has 'Internal modules', are those needed for this project? */

// TODO: Create an array of questions for user input
const questions = [
    
    {
        type: 'input',
        message: "What is the title of the application?",
        name: 'title',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("No title provided");
            }
            return true;
        }
    },
    
    {
        type: 'input',
        message: "Please provide a descritption of the application:",
        name: 'description',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("No descritption provided");
            }
            return true;
        }
    },

    {
        type: 'input',
        message: "What are the installation instructions for this application?",
        name: 'installation',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please provide valid installation instructions");
            }
            return true;
        }
    },

    {
        type: 'input',
        message: "Please enter usage information:",
        name: 'usage',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please provide valid usage information");
            }
            return true;
        }
    },

    {
        type: 'input',
        message: "Please enter contribution guidelines:",
        name: 'contributing',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please provide valid usage information");
            }
            return true;
        }
    },

    {
        type: 'input',
        message: "What are the test instructions for this application?",
        name: 'tests',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please provide valid usage information");
            }
            return true;
        }
    },

    {
        type: 'list',
        message: "Which licesnse will you be using?",
        name: 'license',
        choices: ["GPL_3.0","BSD_3","MIT","none"],
        
    },

    {
        type: 'input',
        message: "What is your Github username?",
        name: 'username',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please provide a valid Github username");
            }
            return true;
        }
    },

    {
        type: 'input',
        message: "What is your email address?",
        name: 'email',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please provide a valid email address");
            }
            return true;
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }

        console.log("Your README.md file has been created")
    });

}




// TODO: Create a function to initialize app
function init() {

    const userResponse = inquirer.prompt(questions) 
        .then((answers) => writeToFile("README.md", generateMarkdown(answers)))


}

// Function call to initialize app
init();
