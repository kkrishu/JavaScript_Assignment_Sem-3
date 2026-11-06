// Name: Your Name
// Roll Number: Your Roll Number
// Assignment: 13 - Question 1

const prices = [120, 45, 300];

const total = prices.reduce((sum, price) => {
    return sum + price;
}, 0);

console.log(total);