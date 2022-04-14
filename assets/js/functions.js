const fs = require("fs")
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    let licenseValue = answers.license;
    let selectedLicense = '';

    if ( answers.license === 'Apache2.0') {
        return selectedLicense ='![Apache](https://img.shields.io/badge/license-Apache2.0-red)';
    }else if ( answers.license === 'MIT') {
        return selectedLicense ='![MIT](https://img.shields.io/badge/license-MIT-red)';
    }else if ( answers.license === 'ISC') {
        return selectedLicense ='![ISC](https://img.shields.io/badge/license-ISC-red)';
    }else if ( answers.license === 'CC') {
        return selectedLicense ='![CC](https://img.shields.io/badge/license-CC-red)';
    }else if ( answers.license === 'Boost') {
        return selectedLicense ='![Boost](https://img.shields.io/badge/license-Boost-red)';
    }else{
        answers.license = "Not Applicable"
    }
    return selectedLicense;
};
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    let licenseValue = answers.license;
    let licenseLink = '';

    if ( answers.license === 'Apache2.0') {
        return licenseLink ='[Apache](https://img.shields.io/badge/license-Apache2.0-red)';
    }else if ( answers.license === 'MIT') {
        return licenseLink ='[MIT](https://img.shields.io/badge/license-MIT-red)';
    }else if ( answers.license === 'ISC') {
        return licenseLink ='[ISC](https://img.shields.io/badge/license-ISC-red)';
    }else if ( answers.license === 'CC') {
        return licenseLink ='[CC](https://img.shields.io/badge/license-CC-red)';
    }else if ( answers.license === 'Boost') {
        return licenseLink ='[Boost](https://img.shields.io/badge/license-Boost-red)';
    }else{
        answers.license = "Not Applicable"
    }
    return licenseLink;
};
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    
}

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

  ## Dependencies
  ${answers.dependencies}
  
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
