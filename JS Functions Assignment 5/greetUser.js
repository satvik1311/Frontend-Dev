// Q1: greetUser.js

"use strict";

// Callback function
function showEndMessage() {
    console.log("Welcome to the course!");
}

// Main function
function greetUser(name, callback) {
    console.log("Hello " + name);

    // Executing callback
    callback();
}

// Calling
greetUser("Satvik", showEndMessage);
