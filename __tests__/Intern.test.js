// intern tests
const Intern = require("../lib/Intern");

describe("Intern", () => {
    it("should be able to get the intern name", () => {
        const intern = new Intern("Chris");
        expect(intern.getName()).toBe("Chris");
    });

    it("should be able to get the intern id", () => {
        const intern = new Intern("Chris", 100);
        expect(intern.getId()).toBe(100);
    });

    it("should be able to get the intern email", () => {
        const intern = new Intern("Chris", 100, "test@test.com");
        expect(intern.getEmail()).toBe("test@test.com");
    });

    it("should be able to get the intern school", () => {
        const intern = new Intern("Chris", 100, "test@test.com", "Sydney Uni");
        expect(intern.getSchool()).toBe("Sydney Uni");
    });

    it("should have a role of Intern", () => {
        const intern = new Intern("Chris", 100, "test@test.com", "ChrisNewbold");
        expect(intern.getRole()).toBe("Intern");
    });
});
