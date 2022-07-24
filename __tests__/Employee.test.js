// employee tests 

const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("should be able to get the employee name", () => {
        const employee = new Employee("Chris");
        expect(employee.getName()).toBe("Chris");
    });

    it("should be able to get the employee id", () => {
        const employee = new Employee("Chris", 100);
        expect(employee.getId()).toBe(100);
    });

    it("should be able to get the employee email", () => {
        const employee = new Employee("Chris", 100, "test@test.com");
        expect(employee.getEmail()).toBe("test@test.com");
    });

    it("should have a role of Employee", () => {
        const employee = new Employee("Chris", 1, "test@test.com");
        expect(employee.getRole()).toBe("Employee");
    });
})
