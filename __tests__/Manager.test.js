const Manager = require("../lib/Manager");

// test for officenumber property
test("check for Manager office no", () => {
    const officeno = 12414;
    const manager = new Manager('Managertest', 2133434, 'manager@gmial.com', officeno);
    expect(manager.officeNumber).toBe(officeno);
});

//  test for office number method
test("check for Manager office no", () => {
    const officeno = 12414;
    const manager = new Manager('Managertest', 2133434, 'manager@gmial.com', officeno);
    expect(manager.getOfficeNumber()).toBe(officeno);
});

// test the getrole() method 
test("test if getRole() returns role ", () => {
    const role = "Manager"
    const manager = new Manager(role);
    expect(manager.getRole()).toBe(role);
  
  });
