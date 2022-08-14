const Employee = require("../lib/Employee");

// initiate the employee class
test("initiate employee", () => {
    const employee = new Employee();
    expect(typeof employee).toBe('object');
  });

// test the name
test("test the name", () => {
    const name = "Employee1"
    const employee = new Employee(name);
    expect(employee.name).toBe(name);

});

// test the id
test("test the id", () => {
  const id = 122
  const employee = new Employee('test', id);
  expect(employee.id).toBe(id);
});

// test the email
test("test the email", () => {
  const email = "employee@gmail.com"
  const employee = new Employee('test', 1222, email);
  expect(employee.email).toBe(email);
});

// test the getname() method
test("test if getName() returns name", () => {
  const getname = "Employee1"
  const employee = new Employee(getname);
  expect(employee.getName()).toBe(getname);

});

// test the getid() method
test("test if getId() returns id", () => {
  const getid = 123
  const employee = new Employee('test', getid);
  expect(employee.getID()).toBe(getid);

});

// test the getEmail() method
test("test if getEmail() returns email", () => {
  const getemail = "employee2@gmail.com"
  const employee = new Employee('test', 1222, getemail);
  expect(employee.getEmail()).toBe(getemail);

});

// test the getrole() method 
test("test if getRole() returns role ", () => {
  const role = "Employee"
  const employee = new Employee(role);
  expect(employee.getRole()).toBe(role);

});