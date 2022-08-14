const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github; 
  }
//  returns the github username
  getGithub() {
    return this.github;
  }
//   returns the role as an Engineer
  getRole() {
    const role = "Engineer";
    return role;
  }
}

//exports the engineer class
module.exports = Engineer;