// Q7: multiplier.js

"use strict";

function makeMultiplier(multiplier) {
    
    // This inner function REMEMBERS "multiplier"
    // even after makeMultiplier finishes → closure
    return function(num) {
        return num * multiplier;
    };
}

const triple = makeMultiplier(3);
console.log(triple(5));  // 15
