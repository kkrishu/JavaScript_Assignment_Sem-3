// Name: Your Name
// Roll Number: Your Roll Number
// Assignment: 12 - Question 1

function applyTwice(fn, value) {
    return fn(fn(value));
}

function addTen(number) {
    return number + 10;
}

console.log(applyTwice(addTen, 5));