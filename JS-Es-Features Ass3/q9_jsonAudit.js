"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const clean = [];

console.log("=== Q9: JSON Audit ===\n");

for (let i = 0; i < rawData.length; i++) {
    try {
        const obj = JSON.parse(rawData[i]);

        if (!obj.user || !obj.age) {
            throw new Error("Missing required keys");
        }

        obj.age = Number(obj.age);

        clean.push(obj);

    } catch (err) {
        console.error(`Line ${i + 1}:`, err.message);
    }
}

console.log("\nClean Valid JSON:", clean);
