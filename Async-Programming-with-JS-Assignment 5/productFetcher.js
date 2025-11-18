// productFetcher.js
"use strict";

/*
Fetch: https://fakestoreapi.com/products
Log for each product:
Product: <title>
Price: $<price>
Image: <image url>

Note: If running in Node <18, use node-fetch or upgrade Node.
*/

async function fetchProductsAndLog() {
    console.log("Fetching products...");
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
        const products = await response.json();

        for (const product of products) {
            console.log("Product:", product.title);
            console.log("Price: $" + product.price);
            console.log("Image:", product.image);
            console.log("---------------------------");
        }
    } catch (err) {
        console.error("Failed to load products. Please try again.");
        console.error("Error details:", err.message);
    }
}

fetchProductsAndLog();

/*
Bonus (Optional): create DOM cards using document.createElement() if running in browser.
This code is kept console-only so it runs in Node/browser consoles.
*/
