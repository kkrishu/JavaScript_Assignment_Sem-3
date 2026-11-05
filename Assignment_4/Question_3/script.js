// Name: Your Name
// Roll Number: Your Roll Number
// Assignment: 4 - Question 3

function billWithTax(amount, taxRate = 0.18) {
    return amount + amount * taxRate;
}

console.log(billWithTax(100));