// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkDown = require("./utils/generateMarkdown.js");

// A function to initialize app
function init() {
  // An array of questions for user input
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
        type: "list",
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
      const readme = generateMarkDown(answers);

      // TODO: Create a function to write README file
      fs.writeFile("README.md", readme, (err) => {
        if (err) throw err;
        console.log("All done!");
      });
    });
}

// Function call to initialize app
init();
