const Employee = require("../lib/Employee");

test("initiate employee", () => {
    const employee = new Employee();
    expect(typeof employee).toBe('object');
  });

test("test the name", () => {
    const name = "Employee1"
    const employee = new Employee(name);
    expect(employee.name).toBe(name);

});
test("test the id", () => {
  const id = 122
  const employee = new Employee(id);
  expect(employee.id).toBe(id);

});

test("test the email", () => {
  const email = "employee@gmail.com"
  const employee = new Employee(email);
  expect(employee.email).toBe(email);

});
test("test if it returns getName() ", () => {
  const name = "Employee1"
  const employee = new Employee(name);
  expect(employee.getName).toBe(name);

});
test("test if it returns getId()", () => {
  const name = "Employee1"
  const employee = new Employee(name);
  expect(employee.name).toBe(name);

});
test("test the name", () => {
  const name = "Employee1"
  const employee = new Employee(name);
  expect(employee.name).toBe(name);

});
test("test the name", () => {
  const name = "Employee1"
  const employee = new Employee(name);
  expect(employee.name).toBe(name);

});