// Name: Your Name
// Roll Number: Your Roll Number
// Assignment: 12 - Question 3

function repeatAction(times, action) {
    for (let round = 1; round <= times; round++) {
        action(round);
    }
}

repeatAction(3, (round) => {
    console.log("Round " + round);
});