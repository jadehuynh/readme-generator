const fs = require("fs")
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    let licenseValue = license;
    let selectedLicense = '';

    if ( license === 'Apache2.0') {
        return selectedLicense =`![Apache](https://img.shields.io/badge/license-Apache2.0-red)`;
    }else if ( license === 'MIT') {
        return selectedLicense =`![MIT](https://img.shields.io/badge/license-MIT-red)`;
    }else if ( license === 'ISC') {
        return selectedLicense =`![ISC](https://img.shields.io/badge/license-ISC-red)`;
    }else if (license === 'Boost') {
        return selectedLicense =`![Boost](https://img.shields.io/badge/license-Boost-red)`;
    }else{
        license = "Not Applicable"
    }
    return selectedLicense;
};
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    let licenseValue = license;
    let licenseLink = '';

    if (license === 'Apache2.0') {
        return licenseLink =`[Click here to learn more on Apache 2.0 licensing](https://choosealicense.com/licenses/apache-2.0/)`;
    }else if ( license === 'MIT') {
        return licenseLink =`[Click here to learn more on MIT licensing](https://choosealicense.com/licenses/mit/)`;
    }else if ( license === 'ISC') {
        return licenseLink =`[Click here to learn more on ISC licensing](https://opensource.org/licenses/ISC)`;
    }else if ( license === 'Boost') {
        return licenseLink =`[Click here to learn more on Boost licensing](https://choosealicense.com/licenses/bsl-1.0/)`;
    }else{
        license = "Not Applicable"
    }
    return licenseLink;
};
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    let licenseValue = license;
    let licenseLink = '';

    if (license === 'MIT') {
        return `A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
    }else if(license === 'Boost') {
        return `A simple permissive license only requiring preservation of copyright and license notices for source (and not binary) distribution. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
    }else if(license === 'Apache2.0') {
        return `A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
    }else if(license === 'ISC') {
        return `A permissive free software license published by the Internet Software Consortium, now called Internet Systems Consortium (ISC). It is functionally equivalent to the simplified BSD and MIT licenses, but without language deemed unnecessary following the Berne Convention.`
    }else{
        return " ";
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

----
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

  ${renderLicenseBadge(answers.license)}

  ${renderLicenseLink(answers.license)}
  
  ${renderLicenseSection(answers.license)}

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
