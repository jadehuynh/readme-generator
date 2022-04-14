// // TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./assets/js/functions')
// TODO: Create an array of questions for user input
const promptQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a description of your project.',
        },
      
        {
            type: 'input',
            name: 'installation',
            message: 'Write a description of installation instructions.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Write a description of usage information.',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What kind of license should your project have?',
            choices:['Apache2.0', 'MIT', 'ISC', 'CC', 'Boost'],
        },
        {
            type: 'input',
            name: 'dependencies',
            message: 'What command should be run to install dependencies?',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'What does the user need to know about contributing to the repo?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'What command should be run to run tests?',
        },
        {
            type: 'input',
            name: 'repo',
            message: 'What does the user need to know about using the repo?',
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address? Please provide instructions ways to reach you with additional questions.',
        },
    ])
    //TODO: Create a function to write README file
    .then(data => {
       const results = generateMarkdown(data)
       fs.writeFileSync("./dest/README.md", results)
    })
};
// Function call to initialize app
const init = () => {
    console.log(data)
    
     fs.writeFileSync("./dest/README.md", generateReadMe)
 }
 
 
 promptQuestions();
