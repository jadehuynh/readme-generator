const fs = require("fs")
const promptQuestions = require("../../index")


const init = () => {
   const data = promptQuestions()
   console.log(data)
   const generateReadMe = generateMarkdown(data)
    fs.writeFileSync("./dest/README.md", generateReadMe)
}

module.exports = promptQuestions

const generateMarkdown = (answers) => {
return `# ${answers.title}

![badge](https://img.shields.io/badge/license-${answers.license}-red)

## Description
${answers.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Test](#test)
- [Questions](#questions)

## Installation 
${answers.installation}


## Usage 
${answers.usage}

## License 
${answers.license}

## Contribution 
${answers.contributing}

## Test
${answers.test}

## Questions

${answers.repo}
${answers.username}
${answers.email}

`
}

init();
