// buildPipeline.js
"use strict";

/*
Pipeline stages:
design -> build -> test -> deploy -> celebrate
Each stage takes 1s and logs its step.

First: nested callbacks (callback hell)
Then: async/await version
*/

// helper to simulate async stage
function pipelineStage(stageName, callback) {
    setTimeout(() => {
        console.log(`Stage: ${stageName}`);
        if (typeof callback === "function") callback();
    }, 1000);
}

// 1) Callback hell version
function runPipelineWithCallbacks() {
    console.log("Callback Hell Pipeline Start");
    pipelineStage("design", () => {
        pipelineStage("build", () => {
            pipelineStage("test", () => {
                pipelineStage("deploy", () => {
                    pipelineStage("celebrate", () => {
                        console.log("Callback Hell Pipeline Completed");
                    });
                });
            });
        });
    });
}

// 2) async/await version (cleaner)
function stagePromise(stageName) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Stage: ${stageName}`);
            resolve(stageName);
        }, 1000);
    });
}

async function runPipelineAsync() {
    console.log("Async/Await Pipeline Start");
    try {
        await stagePromise("design");
        await stagePromise("build");
        await stagePromise("test");
        await stagePromise("deploy");
        await stagePromise("celebrate");
        console.log("Async/Await Pipeline Completed");
    } catch (err) {
        console.error("Pipeline failed:", err.message);
    }
}

/*
Why async/await improves readability:
- Linear, top-down code style that mirrors synchronous code.
- Avoids deep nesting and makes error handling via try/catch straightforward.
- Easier to maintain and reason about each sequential step.
*/

// Run both to see difference
runPipelineWithCallbacks();
setTimeout(() => runPipelineAsync(), 7000); // delay to separate outputs visually
