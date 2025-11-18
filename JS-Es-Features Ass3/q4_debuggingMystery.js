"use strict";

function showMessage() {
    // ERROR in strict mode because 'greeting' becomes an implicit global
    let greeting = "Welcome"; // FIX
    console.log(greeting);
}

console.log("=== Q4: Debugging Mystery ===\n");
showMessage();
console.log("Fixed: greeting is declared with let.");
