"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const valid = [];
const invalid = [];

console.log("=== Q3: Transaction Validator ===\n");

for (let t of transactions) {
    try {
        if (t === null) throw new Error("Null transaction");
        if (!("id" in t) || !("amount" in t))
            throw new Error("Missing id or amount");
        if (t.amount < 0) throw new Error("Negative amount");

        valid.push(t);
        console.log("Valid:", t);

    } catch (err) {
        invalid.push({ transaction: t, error: err.message });
        console.error("Error:", err.message);
    }
}

console.log("\nFinal Report:");
console.log("Valid Count:", valid.length);
console.log("Invalid Count:", invalid.length);
console.log("Invalid Details:", invalid);
