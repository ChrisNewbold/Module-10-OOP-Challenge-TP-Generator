// engineer tests

const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it("should be able to get the engineer name", () => {
        const engineer = new Engineer("Chris");
        expect(engineer.getName()).toBe("Chris");
    });

    it("should be able to get the engineer id", () => {
        const engineer = new Engineer("Chris", 100);
        expect(engineer.getId()).toBe(100);
    });

    it("should be able to get the engineer email", () => {
        const engineer = new Engineer("Chris", 100, "test@test.com");
        expect(engineer.getEmail()).toBe("test@test.com");
    });

    it("should be able to get the engineer github", () => {
        const engineer = new Engineer("Chris", 100, "test@test.com", "ChrisNewbold");
        expect(engineer.getGithub()).toBe("ChrisNewbold");
    });

    it("should have a role of Engineer", () => {
        const engineer = new Engineer("Chris", 100, "test@test.com", "ChrisNewbold");
        expect(engineer.getRole()).toBe("Engineer");
    });
});
