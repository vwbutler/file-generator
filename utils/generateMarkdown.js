// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  let licensezz = "";
  if (license === "mit") {
    licensezz = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (license === "isc") {
    licensezz = `![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)`;
  }
  return licensezz;
}

function generateMarkDown(answers) {
  const {
    title,
    description,
    installation,
    usage,
    contributors,
    tests,
    license,
  } = answers;

  return `
  # Project: ${answers.title}

  ## Description:
  ${answers.description}

  ## Table of Contents:
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation:
  ${answers.installation}
  
  ## Usage:
  ${answers.usage}
  
  ## License:
  ${renderLicenseBadge(license)}
  
  ## Contributing:
  ${answers.contributing}
  
  ## Tests:
  ${answers.tests}
  
  ## Questions:
  If you need help or have questions, contact ${answers.firstName} ${
    answers.lastName
  }.  
  **Github**: [${answers.githubName}](https://github.com/${
    answers.githubName
  })  
  **Email**: ${answers.email}  
        `;
}

module.exports = generateMarkDown;
