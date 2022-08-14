// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');

inquirer
.prompt([
        {
            type: 'input',
            message: 'What is the title of the project?',
            name: 'title',
        },
    ])
    .then((response) =>
        fs.writeFile("./dist/index.html", response.toString(), err => {
            if (err) {
                console.log('Error occured!');
            }
            
        })
             
            
    );

// Function call to initialize app
// init();