const Engineer = require("../lib/Engineer");

test("check for githubusername", () => {
    const githubusername = "testuser";
    const engineer = new Engineer('Test', 1221, 'test@gmial.com', githubusername);
    expect(engineer.github).toBe(githubusername)
});