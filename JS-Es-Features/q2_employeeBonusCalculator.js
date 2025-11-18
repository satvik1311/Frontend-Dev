"use strict";

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

console.log("=== Q2: Employee Bonus Calculator ===\n");

for (const emp of employees) {
    try {
        if (!emp.name || !emp.salary || !emp.years) {
            throw new Error("Missing employee property");
        }

        const salary = Number(emp.salary);
        const years = Number(emp.years);

        if (isNaN(salary) || isNaN(years)) {
            throw new Error("Invalid number conversion");
        }

        const bonus = years > 3 ? salary * 0.1 : salary * 0.05;

        console.log(`
Employee: ${emp.name}
Salary: ${salary}
Experience: ${years} years
Bonus: ${bonus}
-------------------------------------------
        `);

    } catch (err) {
        console.error(`Error for employee ${emp.name}:`, err.message);
    }
}
