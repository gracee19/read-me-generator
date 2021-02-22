// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown');

const fileName = `GENREADME.md`;

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Please enter your Github Username',
        name: 'gitHub'
    },
    {
        type: 'input',
        message: 'Please enter your email address',
        name: 'email'
    },
    {
        type: 'input',
        message: 'Please enter project title',
        name: 'projectTitle'
    },
    {
        type: 'input',
        message: 'Please enter project description',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Please add details about your table of contents.',
        name: 'contents'
    },
    {
        type: 'input',
        message: 'Please enter the installation of the project',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Please enter the usage',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'What is the license of this project',
        name: 'license'
    },
    {
        type: 'input',
        message: 'Who is contributing in this project',
        name: 'contribute'
    },
    {
        type: 'input',
        message: 'What test?',
        name: 'test'
    },
    {
        type: 'input',
        message: 'Please enter your questions.',
        name: 'question'
    }
]



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, null, (err) =>
        err ? console.log(err) : console.log('Success')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => 
            writeToFile(fileName, generateMarkdown(data))
            // const newFile = `# Project Title: ${response.projectTitle}`;
            // console.log(`${response.projectTitle}`);
        );
        // .catch((err) => console.error(err));
}

// Function call to initialize app
init();

// [
//     "Project Title",
//     "Description",
//     "Table Of Contents",
//     "Installation",
//     "Usage",
//     "License",
//     "Contributing",
//     "Test",
//     "Questions"
// ];