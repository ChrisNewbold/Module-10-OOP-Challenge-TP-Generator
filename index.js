// TODO: Include packages needed for this application
const fs = require('fs')
const generateHTML = require('./src/page-template')
// TODO: Create an array of questions for user input
const managerQuestions = require('./manager')
const engineerQuestions = require('./engineer')
const employeeQuestions = require('./newEmployee')
const internQuestions = require('./intern')
var inquirer = require('inquirer')
const newEmployee = require('./newEmployee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const intern = require('./intern')
var team = []

// TODO: Create a function to write HTML file
function writeToFile(fileName, data) {
    console.log(fileName, data)
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Your HTML file has been generated!');
        }
    })
};
// function to initialize app
function init() {
    console.log(managerQuestions)
    inquirer.prompt(managerQuestions)
        .then((managerData) => {
            console.log(managerData)
            const manager = new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber)
            team.push(manager)
            employeePrompts(team)
        })
}
console.log(employeeQuestions)
function engineerPrompts(team) {
}
function internPrompts(team) {
    inquirer.prompt(internQuestions).then((internData) => {
        team.push(internData)
        employeePrompts(team)
    })
}
function employeePrompts(team) {
    inquirer.prompt(employeeQuestions)
        .then((employeeData) => {
            switch (employeeData.newEmployee) {
                case 'Add an Engineer':
                    inquirer.prompt(engineerQuestions)
                        .then((engineerData) => {
                            const engineerMember = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github)
                            team.push(engineerMember)
                        })
                    break;
                case 'Add an Intern':
                    inquirer.prompt(internQuestions)
                        .then((internData) => {
                            const internMember = new Intern(engineerData.name, engineerData.id, engineerData.email, engineerData.school)
                            team.push(internMember)
                        })
                    employeePrompts(employeePrompts);
                    break;
                case 'finish building my team':
                    newEmployeePrompts(newEmployeePrompts)

                default: newEmployeePrompts(newEmployeePrompts)
                    break;
            }
            // writeToFile('index.html', generateHTML(data));
        })
}
// make the menu reoccursive
// ask if i want a new employee or not 

// Function call to initialize app
init();
