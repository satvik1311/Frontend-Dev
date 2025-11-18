// deploymentRace.js
"use strict";

/*
Server A: responds in 2s
Server B: responds in 3s
Use Promise.all and Promise.race
Simulate random failure via Math.random()
*/

function serverA() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) return reject(new Error("Server A failed"));
            resolve("Server A done");
        }, 2000);
    });
}

function serverB() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) return reject(new Error("Server B failed"));
            resolve("Server B done");
        }, 3000);
    });
}

// Promise.all
Promise.all([serverA(), serverB()])
    .then(results => {
        console.log("Deployment completed for all servers:", results);
    })
    .catch(err => {
        console.error("Deployment failed (Promise.all):", err.message);
    });

// Promise.race
Promise.race([serverA(), serverB()])
    .then(first => {
        console.log("Fastest response:", first);
    })
    .catch(err => {
        console.error("Fastest response error (Promise.race):", err.message);
    });
