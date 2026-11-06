// Name: Your Name
// Roll Number: Your Roll Number
// Assignment: 11 - Question 2

function makeCounter() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
}

const counter = makeCounter();

console.log(counter());
console.log(counter());