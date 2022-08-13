const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

//   returns the officenumber
  getOfficeNumber() {
   
  }
//   returns the role as manager
  getRole() {
    
  }
}

//exports the manager class
module.exports = Manager;