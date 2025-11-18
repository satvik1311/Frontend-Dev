// taskScheduler.js
"use strict";

/*
Goal:
- Log order of execution to show microtasks run before macrotasks
Expected behavior:
Start
(Sync log)
Promise.then() callback  <-- microtask runs before setTimeout
setTimeout callback (macrotask)
End

But we put Start, then schedule micro & macro, write a synchronous log, then End,
so final order will show microtask executing before macrotask.
*/

console.log("Start");

// macrotask
setTimeout(() => {
    console.log("setTimeout (macrotask) executed");
}, 0);

// microtask
Promise.resolve().then(() => {
    console.log("Promise.then (microtask) executed");
});

// synchronous log
console.log("Synchronous log (in main script)");

console.log("End");

/*
Explanation (in comments):
- Synchronous code runs first, top to bottom.
- After synchronous code, JS runs microtasks queue (promises .then()).
- Then the event loop takes macrotasks (setTimeout) and executes them.
So Promise.then() runs before setTimeout() even if both scheduled with 0ms.
*/
