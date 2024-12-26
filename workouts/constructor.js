// Create a constructor function that satisfies the following conditions:

// The name of the constructor function should be Car.
// It should take three parameters: name, mileage and max_speed.
// Store these parameter values in their respective thiskeywords: this.name, this.mileage and this.max_speed.

class Car {
    constructor(name, mileage, maxSpeed) {
        this.name = name;
        this.mileage = mileage;
        this.maxSpeed = maxSpeed;
    }
}

const car = new Car("Bugatti", 10, 250);

console.log("\n", car, "\n");