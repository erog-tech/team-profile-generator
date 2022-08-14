const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

//   returns the officenumber
  getOfficeNumber() {
   return this.officeNumber;
  }
//   returns the role as manager
  getRole() {
    const role = "Manager";
    return role;
  }
}

//exports the manager class
module.exports = Manager;