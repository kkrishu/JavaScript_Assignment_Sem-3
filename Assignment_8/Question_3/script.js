// Name: Your Name
// Roll Number: Your Roll Number
// Assignment: 8 - Question 3

class Engine {
    constructor(power) {
        this.power = power;
    }
}

class Car {
    constructor(power) {
        this.engine = new Engine(power);
    }

    start() {
        return "Car starts with " + this.engine.power + " HP";
    }
}

const car = new Car(150);

console.log(car.start());