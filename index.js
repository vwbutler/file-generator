// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkDown = require("./utils/generateMarkdown");
const { start } = require("repl");

// TODO: Create an array of questions for user input

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "Enter the project title.",
    },
    {
      type: "input",
      name: "description",
      message: "Describe your project.",
    },
    {
      type: "input",
      name: "installation",
      message: "What are the installation instructions?",
    },
    {
      type: "input",
      name: "usage",
      message: "Provide usage details.",
    },
    {
      type: "checkbox",
      name: "license",
      message: "Select a license.",
      choices: ["mit", "isc", "gnuplv3"],
    },
    {
      type: "input",
      name: "contributing",
      message: "Enter contributors.",
    },
    {
      type: "input",
      name: "tests",
      message: "Describe testing procedures.",
    },
    {
      type: "input",
      name: "firstName",
      message: "Enter your first name.",
    },
    {
      type: "input",
      name: "lastName",
      message: "Enter your last name.",
    },
    {
      type: "input",
      name: "githubName",
      message: "Enter your GitHub name.",
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email address.",
    },
  ])
  .then((answers) => {
    const readme = `
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
${answers.license}
## Contributing:
${answers.contributing}
## Tests:
${answers.tests}
## Questions:
If you need help or have questions, contact ${answers.firstName} ${answers.lastName}.  
**Github**: [${answers.githubName}](https://github.com/${answers.githubName})  
**Email**: ${answers.email}  
`;
    // TODO: Create a function to write README file

    fs.writeFile("README.md", readme, (err) => {
      if (err) throw err;
      console.log("All done!");
    });
  });

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
