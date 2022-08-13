const Manager = require("../lib/Manager");

test("check for Manager office no", () => {
    const officeno = 12414;
    const manager = new Manager('Managertest', 2133434, 'manager@gmial.com', officeno);
    expect(manager.officeNumber).toBe(officeno);
});