const fs = require('fs');
const inquirer = require('inquirer');
const displayHmtl = 

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            display: 'Title of Project',
        },
        {
            type: 'input',
            name: 'description',
            display: 'Write a description of your project.',
        },
        {
            type: 'input',
            name: 'contents',
            display: 'Write a Table of Contents.',
        },
        {
            type: 'input',
            name: 'installation',
            display: 'Write a description of installation instructions.',
        },
        {
            type: 'input',
            name: 'usage',
            display: 'Write a description of usage information.',
        },
        {
            type: 'input',
            name: 'license',
            display: 'License Information.',
        },
        {
            type: 'input',
            name: 'contributing',
            display: 'Write a description of contribution guidelines.',
        },
        {
            type: 'input',
            name: 'installation',
            display: 'Write a description of installation instructions.',
        },
        {
            type: 'input',
            name: 'test',
            display: 'Write a description of test instructions.',
        },
        {
            type: 'input',
            name: 'questions',
            display: 'GitHub Profile Link.',
        },
        {
            type: 'input',
            name: 'questions',
            display: 'Write email address, and instructions ways to reach you with additional questions.',
        },
    ])