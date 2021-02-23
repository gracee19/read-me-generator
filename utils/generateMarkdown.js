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
function generateMarkdown(data) {
  return `
![Licence](https://img.shields.io/badge/LICENSE${data.license}-skyblue)
# ${data.projectTitle}
# Description
${data.description}
# Table Of Contents
${data.contents}
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
# Installation
${data.installation}
# Usage
${data.usage}
# Licence 
${data.license}
# Contributors
${data.contribute}
# Test 
${data.test}
# Questions 
${data.question}<br>
For more information you can check my Github account ${data.gitHub}(https://github.com/${data.gitHub}).<br>
Please don't hesitate to ask questions you can email me at ${data.email}.
`
}

module.exports = generateMarkdown;
