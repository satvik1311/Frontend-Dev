"use strict";

console.log("=== Q10: Nested Hoisting and Closures ===\n");

function outer() {
    console.log(count); // undefined due to hoisting
    var count = 5;

    function inner() {
        console.log(count); // undefined inside inner (new hoisted var)
        var count = 10;
    }

    inner();
}

outer();

// Arrow version
console.log("\n--- Arrow Version ---");

function outer2() {
    var count = 5;

    const inner = () => {
        console.log(count); // refers to outer2's count
    };

    inner();
}

outer2();
