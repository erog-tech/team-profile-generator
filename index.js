// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const generateHTML = require('./lib/htmlrender');
const team = [];

inquirer
.prompt([
    {
        type: "input",
        name: "managerName",
        message: "What is your name?",
      },
      {
        type: "input",
        name: "employeeid",
        message: "What is your id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is your office number?",
      },
    {
        type: "list",
        name: "addTeam",
        message: "Add your team?",
        choices: ["Engineer", "Intern", "Finish"],
      },

    ])
    .then((response1) => {
        inquirer 
        .prompt ([
            {
                when: () => response1.addTeam === "Engineer",
                type: "input",
                message: "What is the GitHub Username?",
                name: "github",
              },
              {
                when: () => response1.addTeam === "Intern",
                type: "input",
                message: "What is the school name?",
                name: "school",
              },
              {
                when: () => response1.addTeam === "Finish",
                type: "confirm",
                message: "your team is built",
                name: "finish",
              },
        ])
        .then((response2) => {
            if (response1.addTeam === "Engineer") {
                const engineer = new Engineer(response1.name, response1.id, response1.addTeam, response1.github)
                team.push(engineer);
            }
            if (response1.addTeam === "Intern") {
                const intern = new Intern(response1.name, response1.id, response1.addTeam, response1.school)
                team.push(intern);
            }
            else {
                fs.writeFile("./dist/index.html", generateHTML(response2), err => {
                    if (err) {
                        console.log('Error occured!');
                    }
                    
                }); 
            }
            fs.writeFile("./dist/index.html", generateHTML(response2), err => {
                if (err) {
                    console.log('Error occured!');
                }
                
            });
        });
        
        
    });