const fs = require('fs');
const inquirer = require('inquirer');


const promptQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Title of Project:',
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
            choices:['Apache2.0', 'MIT', 'ISC', 'CC', 'Boost'],
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Write a description of contribution guidelines.',
        },
        {
            type: 'input',
            name: 'test',
            message: 'Write a description of test instructions.',
        },
        {
            type: 'input',
            name: 'repo',
            message: 'GitHub Repository.',
        },
        {
            type: 'input',
            name: 'username',
            message: 'Enter GitHub Username.',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Write email address, and instructions ways to reach you with additional questions.',
        },
    ])
    .then(data => {
       const results = generateMarkdown(data)
       fs.writeFileSync("./dest/README.md", results)
    })
};
const init = () => {
    console.log(data)
    
     fs.writeFileSync("./dest/README.md", generateReadMe)
 }
 
 
 
 