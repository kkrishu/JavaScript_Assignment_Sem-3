// Name: Your Name
// Roll Number: Your Roll Number
// Assignment: 14 - Question 3

let count = 0;

const intervalId = setInterval(() => {
    count++;

    console.log("Tick " + count);

    if (count === 3) {
        clearInterval(intervalId);
    }
}, 200);