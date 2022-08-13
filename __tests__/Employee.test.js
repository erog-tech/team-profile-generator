const Employee = require("../lib/Employee");

test("initiate employee", () => {
    const employee = new Employee();
    expect(typeof employee).toBe('object');
  });