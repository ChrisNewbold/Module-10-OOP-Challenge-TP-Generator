// manager tests
const Manager = require("../lib/Manager");

describe("Manager", () => {
    it("should be able to get the intern name", () => {
        const manager = new Manager("Chris");
        expect(manager.getName()).toBe("Chris");
    });

    it("should be able to get the intern id", () => {
        const manager = new Manager("Chris", 100);
        expect(manager.getId()).toBe(100);
    });

    it("should be able to get the intern email", () => {
        const manager = new Manager("Chris", 100, "test@test.com");
        expect(manager.getEmail()).toBe("test@test.com");
    });

    it("should be able to get the intern office number", () => {
        const manager = new Manager("Chris", 100, "test@test.com", "0471908713");
        expect(manager.getOfficeNumber()).toBe("0471908713");
    });

    it("should have a role of Manager", () => {
        const manager = new Manager("Chris", 100, "test@test.com", "ChrisNewbold");
        expect(manager.getRole()).toBe("Manager");
    });
});
