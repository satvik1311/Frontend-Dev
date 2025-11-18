"use strict";

console.log("=== Q5: Hoisting Lab ===\n");

// Predict output: score → undefined
console.log(score); 
announce(); 

var score = 50;

function announce() {
    console.log("Game started");
}

let status = "ready";

startGame(); 

function startGame() {
    console.log(status);
}

// FIXED VERSION USING ARROW FUNCTIONS (no hoisting)
console.log("\n--- Fixed Version ---");

const announce2 = () => console.log("Game started");
const startGame2 = () => console.log(status);

announce2();
startGame2();
