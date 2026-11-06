// Name: Your Name
// Roll Number: Your Roll Number
// Assignment: 14 - Question 2

const timerId = setTimeout(() => {
    console.log("Not shown");
}, 1000);

clearTimeout(timerId);

console.log("Cancelled");