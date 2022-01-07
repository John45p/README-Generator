
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "none"){
      return ""
      
    }
    else {
      return `![badge](https://img.shields.io/badge/license-${license})<br />`
    }
  }
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === "none"){
        return ""
    }
    else {
        return `[License](#license)`
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
 if (license === "none"){
     return ""
 }
else {
    return `## License
    ${license}`
}
}
function generateREADME(questions) {
    return `
    

  # ${questions.projectTitle}
 ${renderLicenseBadge(questions.license)}
  
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink(questions.license)}
  * [Contributors](#contributors)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Description
  ${questions.description}

  ## Installation Instructions
  ${questions.installation}

  ## Usage Information
  ${questions.usage}

  ${renderLicenseSection(questions.license)}

  ## Contributors
  ${questions.contributing}

  ## Tests
  ${questions.tests}

  ## Questions
  Contact me:
  Github: [https://github.com/${questions.github}](https://github.com/${questions.github})
  Email: [${questions.email}](${questions.email})
  `;
  }

module.exports = generateREADME