const Engineer = require("../lib/Engineer");

// test for github property
test("check for githubusername", () => {
    const githubusername = "testuser";
    const engineer = new Engineer('Test', 1221, 'test@gmial.com', githubusername);
    expect(engineer.github).toBe(githubusername)
});

// test for github() method
test("test if github() method returns the username ", () => {
    const githubusername = 'test-github';
    const engineer = new Engineer('Test', 1221, 'test@gmial.com', githubusername);
    expect(engineer.getGithub()).toBe(githubusername);
});

// test the getrole() method 
test("test if getRole() returns role ", () => {
    const role = "Engineer"
    const engineer = new Engineer(role);
    expect(engineer.getRole()).toBe(role);
  
  });