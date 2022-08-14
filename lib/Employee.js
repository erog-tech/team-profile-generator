class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
 // returns the name of the employee
    getName() {
        return this.name;

    }
// returns the ID of the Employee
    getID() {
        return this.id;
    }
//  returns the emial of the Employee
    getEmail() {
        return this.email;
    }
//  returns the role should return employee
    getRole() {
        const role = "Employee"
        return role;
    }
}

// exports the employee class
module.exports = Employee;