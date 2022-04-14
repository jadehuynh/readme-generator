const fs = require("fs")
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

  ![badge](https://img.shields.io/badge/license-${answers.license}-red)
  
  ## Description
  ${answers.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Dependencies](#dependencies)
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

module.exports = generateMarkdown;
