const Intern = require("../lib/Intern");

// test fór schoolname
test("check for schoolname", () => {
    const schoolname = "testschoolname";
    const intern = new Intern('interntest', 2132, 'intern@gmial.com', schoolname);
    expect(intern.school).toBe(schoolname)
});

// test for schoolname method
test("test if getSchool() returns the name of school", () => {
    const schoolname = "testschoolname";
    const intern = new Intern('interntest', 2132, 'intern@gmial.com', schoolname);
    expect(intern.getSchool()).toBe(schoolname); 
});

// test the getrole() method 
test("test if getRole() returns role ", () => {
    const role = "Intern"
    const intern = new Intern(role);
    expect(intern.getRole()).toBe(role);
  
  });