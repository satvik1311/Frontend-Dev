// retryOrder.js
"use strict";

/*
submitOrder(): Promise that fails 50% of the time.
processOrder(): tries up to 3 times (loop + await) and logs attempts.
*/

function submitOrder() {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 1000) + 1000; // 1-2s
        setTimeout(() => {
            if (Math.random() < 0.5) {
                return reject(new Error("submitOrder failed (random)"));
            }
            resolve("Order submitted successfully");
        }, delay);
    });
}

async function processOrder(maxAttempts = 3) {
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
            const result = await submitOrder();
            console.log(`Attempt ${attempt}: Success - ${result}`);
            return result;
        } catch (err) {
            console.log(`Attempt ${attempt}: Failed - ${err.message}`);
            if (attempt === maxAttempts) {
                throw new Error("Order could not be processed");
            }
            // optional: small delay before retry
            await new Promise(res => setTimeout(res, 500));
        }
    }
}

(async () => {
    try {
        await processOrder(3);
        console.log("Order processing completed.");
    } catch (err) {
        console.error(err.message);
    }
})();
