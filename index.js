// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
inquirer
    .prompt([
        {
            type:'input',
            message: 'Please enter project title',
            name: 'projectTitle'
        },
        {
            type:'input',
            message: 'Please enter project description',
            name: 'description'
        },
        {
            type:'input',
            message: 'Please list the contents',
            name: 'contents'
        },
        {
            type:'input',
            message: 'Please enter the installation of the project',
            name: 'installation'
        },
        {
            type:'input',
            message: 'Please enter the usage',
            name: 'usage'
        },
        {
            type:'input',
            message: 'What is the license of this project',
            name: 'license'
        },
        {
            type:'input',
            message: 'Who is contributing in this project',
            name: 'contribute'
        },
        {
            type:'input',
            message: 'What test?',
            name: 'test'
        },
        {
            type:'input',
            message: 'Please enter your questions.',
            name: 'question'
        }
    ])
    .then((response) => {
        const fileName = `README.md`;
        console.log(`${response.projectTitle}`);
        fs.writeToFile(fileName, newFile, null, (err) =>
        err ? console.log(err) : console.log('Success')
        );
    }); 

// TODO: Create an array of questions for user input
const questions = [
    "Project Title",
    "Description",
    "Table Of Contents",
    "Installation",
    "Usage",
    "License",
    "Contributing",
    "Test",
    "Questions"
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();