const Intern = require("../lib/Intern");

test("check for schoolname", () => {
    const schoolname = "testschoolname";
    const intern = new Intern('interntest', 2132, 'intern@gmial.com', schoolname);
    expect(intern.school).toBe(schoolname)
});