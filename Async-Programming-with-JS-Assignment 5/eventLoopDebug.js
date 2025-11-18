// eventLoopDebug.js
"use strict";

/*
Given script:
console.log("Script start");
setTimeout(() => console.log("Timeout callback"), 0);
Promise.resolve().then(() => console.log("Promise callback"));
console.log("Script end");

Before running, predicted order (comments):
1) Script start  -- sync
2) Script end    -- sync
3) Promise callback  -- microtask queue runs before macrotasks
4) Timeout callback  -- macrotask

Now run to verify.
*/

console.log("Script start");

setTimeout(() => console.log("Timeout callback"), 0);

Promise.resolve().then(() => console.log("Promise callback"));

console.log("Script end");

/*
Explanation:
- Synchronous logs run immediately.
- After the current turn of the event loop finishes, microtasks (Promise callbacks) run.
- Then next macrotasks (setTimeout) run.
So promise callback prints before timeout callback.
*/
