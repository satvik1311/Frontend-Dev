"use strict";

// Mixed API data
const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumbers = [];
const invalidNumbers = [];

// Helper to check numeric validity
function isValidNumber(value) {
    const num = Number(value);
    return !isNaN(num) && value !== " " && !value?.includes("px");
}

console.log("=== Q1: Dynamic Data Parser ===\n");

for (let i = 0; i < apiData.length; i++) {
    const original = apiData[i];

    const asNumber = Number(original);
    const asBoolean = Boolean(original);
    const asString = String(original);

    console.log(`Value: ${original}`);
    console.log(`→ Number:`, asNumber);
    console.log(`→ Boolean:`, asBoolean);
    console.log(`→ String:`, asString);

    if (isValidNumber(original)) {
        validNumbers.push(asNumber);
    } else {
        invalidNumbers.push(original);
    }

    console.log("----------------------------");
}

console.log("Valid Numeric Data:", validNumbers);
console.log("Invalid Data:", invalidNumbers);
