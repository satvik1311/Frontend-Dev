// Without strict mode → allows duplicate parameters + implicit globals
function demo(a, a) {
    total = 10; // becomes global
    delete total; // returns false
}
console.log("Ran without strict mode (no errors)");


// STRICT VERSION (errors)
"use strict";

function demoStrict(a, b) {
    let total = 10;
    // delete total; // ERROR: cannot delete local variable
    console.log("Strict mode function executed");
}

demoStrict(5, 10);
