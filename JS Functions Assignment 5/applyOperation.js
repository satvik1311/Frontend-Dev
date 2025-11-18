// Q2: applyOperation.js

"use strict";

// Higher-order function
function applyOperation(numbers, operation) {
    const result = [];

    for (let num of numbers) {
        result.push(operation(num)); // calling callback
    }

    return result;
}

// Callback functions
const double = (n) => n * 2;
const square = (n) => n * 2;

// Test
console.log("Double:", applyOperation([1,2,3,4], (n)=>n*2));
console.log("Square:", applyOperation([1,2,3,4], (n)=>n*n));
