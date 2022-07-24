// TODO: Include packages needed for this application
const fs = require('fs')
const generateHTML = require('./src/page-template')
// an array of questions for user input
const managerQuestions = require('./manager')
const engineerQuestions = require('./engineer')
const employeeQuestions = require('./newEmployee')
const internQuestions = require('./intern')
var inquirer = require('inquirer')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
var team = []

// Function declaration to write HTML file
function writeToFile(fileName, data) {
    console.log(fileName, data)
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            console.log(err);
        } else {
            // log finished statement
            console.log('Your HTML file has been generated!');
        }
    })
};
// function to initialize app
function init() {
    // console.log(managerQuestions)
    inquirer.prompt(managerQuestions)
        .then((managerData) => {
            console.log(managerData)
            const manager = new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber)
            team.push(manager)
            employeePrompts(team)
        })
}
// Uses the data from the prompt answers to determine which type of employee to render
function employeePrompts(team) {
    inquirer.prompt(employeeQuestions)
        .then((employeeData) => {
            switch (employeeData.newEmployee) {
                case 'Add an Engineer':
                    inquirer.prompt(engineerQuestions)
                        .then((engineerData) => {
                            const engineerMember = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github)
                            team.push(engineerMember)
                            // call back employee prompts
                            employeePrompts(team)
                        })
                    break;
                case 'Add an Intern':
                    inquirer.prompt(internQuestions)
                        .then((internData) => {
                            const internMember = new Intern(internData.name, internData.id, internData.email, internData.school) // name, id, email, school
                            team.push(internMember)
                            // call back employee prompts
                            employeePrompts(team)
                        })
                    break;
                // Complete team
                case 'finish building my team':
                    console.log(team)
                    // log prompt data to generate HTML file in select folder
                    writeToFile('dist/index.html', generateHTML(team));
                default:
                    break;
            }
        })
}

// Function call to initialize app
init();
