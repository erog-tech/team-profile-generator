const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

//   returns the school name
  getSchool() {
    
  }

//   returns the role as intern
  getRole() {
    
  } 
}

//exports the intern class
module.exports = Intern;