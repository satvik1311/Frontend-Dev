// deliveryPipeline.js
"use strict";

/*
Steps:
takeOrder -> prepare -> pack -> dispatch -> deliver
Each returns Promise with random 1-2s delay and success/failure.
runPipeline uses async/await and try/catch to manage flow.
*/

function randomDelay(min = 1000, max = 2000) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomFail(probability = 0.2) {
    return Math.random() < probability;
}

function takeOrder() {
    return new Promise((resolve, reject) => {
        const d = randomDelay();
        setTimeout(() => {
            if (randomFail(0.1)) return reject(new Error("Failed to take order"));
            console.log("Step 1: Order taken");
            resolve("order taken");
        }, d);
    });
}

function prepare() {
    return new Promise((resolve, reject) => {
        const d = randomDelay();
        setTimeout(() => {
            if (randomFail(0.15)) return reject(new Error("Failed to prepare food"));
            console.log("Step 2: Food prepared");
            resolve("prepared");
        }, d);
    });
}

function pack() {
    return new Promise((resolve, reject) => {
        const d = randomDelay();
        setTimeout(() => {
            if (randomFail(0.05)) return reject(new Error("Failed to pack")));
            console.log("Step 3: Package ready");
            resolve("packed");
        }, d);
    });
}

function dispatch() {
    return new Promise((resolve, reject) => {
        const d = randomDelay();
        setTimeout(() => {
            if (randomFail(0.1)) return reject(new Error("Failed to dispatch")));
            console.log("Step 4: Out for delivery");
            resolve("dispatched");
        }, d);
    });
}

function deliver() {
    return new Promise((resolve, reject) => {
        const d = randomDelay();
        setTimeout(() => {
            if (randomFail(0.1)) return reject(new Error("Delivery failed")));
            console.log("Delivery completed!");
            resolve("delivered");
        }, d);
    });
}

async function runPipeline() {
    console.log("Start Pipeline");
    try {
        await takeOrder();
        await prepare();
        await pack();
        await dispatch();
        await deliver();
        console.log("Pipeline finished successfully.");
    } catch (err) {
        console.error("Pipeline failed!", err.message);
    }
}

/*
Comments on async behavior and event loop:
- Each step returns a Promise that delays via setTimeout (macrotask).
- await pauses the async function's execution until the Promise settles,
  but it doesn't block the event loop — other tasks can proceed.
- Errors thrown/rejected inside awaited Promises are caught by the surrounding try/catch.
*/
runPipeline();
