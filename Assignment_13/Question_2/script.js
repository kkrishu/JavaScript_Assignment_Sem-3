// Name: Your Name
// Roll Number: Your Roll Number
// Assignment: 13 - Question 2

const marks = [72, 85, 30, 90];

const hasBelow40 = marks.some(mark => mark < 40);
console.log(hasBelow40);

const allAbove35 = marks.every(mark => mark >= 35);
console.log(allAbove35);