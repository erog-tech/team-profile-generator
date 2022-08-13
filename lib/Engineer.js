const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github; 
  }
//  returns the github username
  getGithub() {
  
  }
//   returns the role as an Engineer
  getRole() {

  }
}

//exports the engineer class
module.exports = Engineer;