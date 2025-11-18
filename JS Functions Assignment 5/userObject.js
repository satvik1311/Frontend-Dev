// Q3: userObject.js

"use strict";

const user = {
    name: "Satvik",
    showName: () => {         
        // Arrow functions do NOT have their own "this"
        // "this" comes from outer scope → undefined here
        console.log(this.name); 
    }
};

user.showName(); // undefined
// To fix, use regular functionconst userFixed = {
    name: "Satvik",
    showName: function() {
        console.log(this.name); // Now works because normal functions bind "this"
    }
};

userFixed.showName();
