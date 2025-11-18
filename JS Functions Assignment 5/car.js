// Q4: car.js

"use strict";

function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// Prototype method (shared by all Car objects)
Car.prototype.getDetails = function() {
    console.log(`Brand: ${this.brand}, Model: ${this.model}`);
};

const car1 = new Car("Tesla", "Model S");
const car2 = new Car("BMW", "X5");

car1.getDetails();
car2.getDetails();
