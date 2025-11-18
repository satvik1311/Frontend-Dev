
"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25,
      num2 = 0;

console.log("=== Q7: Smart Calculator ===\n");

function calculate(op) {
    try {
        switch (op) {
            case "add":
                return num1 + num2;

            case "subtract":
                return num1 - num2;

            case "power":
                return num1 ** num2;

            case "divide":
                if (num2 === 0) throw new Error("Divide by zero error");
                return num1 / num2;

            case "root":
                if (num1 < 0) throw new Error("Root of negative number");
                return Math.sqrt(num1);

            default:
                throw new Error("InvalidOperationError");
        }
    } catch (err) {
        return `Error: ${err.message}`;
    }
}

for (let op of operations) {
    console.log(`Operation: ${op} → Result: ${calculate(op)}`);
}
