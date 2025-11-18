// bugTracker.js
"use strict";

/*
Original callback style:
function fetchBugs(callback) {
  setTimeout(() => callback(["UI glitch", "API timeout", "Login failure"]), 1000);
}

We convert to getBugs() which returns Promise.
*/

function getBugs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const apiFail = Math.random() < 0.25; // 25% fail
            if (apiFail) {
                return reject(new Error("Failed to fetch bugs from server"));
            }
            const bugs = ["UI glitch", "API timeout", "Login failure"];
            resolve(bugs);
        }, 1000);
    });
}

// Use it
getBugs()
    .then(bugs => {
        console.log("Bugs fetched:");
        console.table(bugs.map((b, i) => ({ id: i + 1, issue: b })));
    })
    .catch(err => {
        console.error("Error fetching bugs:", err.message);
    });
