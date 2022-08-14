const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

//   returns the school name
  getSchool() {
    return this.school;
  }

//   returns the role as intern
  getRole() {
    const role = "Intern"
    return role;
  } 
}

//exports the intern class
module.exports = Intern;