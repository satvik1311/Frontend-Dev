// asyncCoffee.js
"use strict";

/*
Steps:
- boilWater(): resolves after 1-2s
- brewCoffee(): resolves after 1-2s
- pourCoffee(): resolves after 1-2s
Use Promise chaining (.then()) and .catch() for errors.
*/

function randomDelay(min = 1000, max = 2000) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function maybeFail(probability = 0.2) {
    // returns true if should fail
    return Math.random() < probability;
}

function boilWater() {
    return new Promise((resolve, reject) => {
        const delay = randomDelay();
        console.log("Boiling water...");
        setTimeout(() => {
            if (maybeFail(0.15)) {
                return reject(new Error("Boiler malfunction!"));
            }
            console.log("Water boiled.");
            resolve("boiled water");
        }, delay);
    });
}

function brewCoffee(boiledWater) {
    return new Promise((resolve, reject) => {
        const delay = randomDelay();
        console.log("Brewing coffee with:", boiledWater);
        setTimeout(() => {
            if (maybeFail(0.15)) {
                return reject(new Error("Coffee grounds ran out!"));
            }
            console.log("Coffee brewed.");
            resolve("brewed coffee");
        }, delay);
    });
}

function pourCoffee(brewedCoffee) {
    return new Promise((resolve, reject) => {
        const delay = randomDelay();
        console.log("Pouring coffee into cup...");
        setTimeout(() => {
            if (maybeFail(0.1)) {
                return reject(new Error("Cup broke while pouring!"));
            }
            console.log("Coffee poured.");
            resolve("Coffee ready for the team!");
        }, delay);
    });
}

// Use Promise chaining
boilWater()
    .then(result => brewCoffee(result))
    .then(result => pourCoffee(result))
    .then(finalMsg => {
        console.log(finalMsg);
    })
    .catch(err => {
        console.error("Coffee process failed:", err.message);
    });
