// Name: Your Name
// Roll Number: Your Roll Number
// Assignment: 9 - Question 1

const heading = document.getElementById("heading");
const button = document.getElementById("changeButton");

button.addEventListener("click", function() {
    heading.textContent = "Button clicked";
});