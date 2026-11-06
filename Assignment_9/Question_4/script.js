// Name: Your Name
// Roll Number: Your Roll Number
// Assignment: 9 - Question 4

const checkButton = document.getElementById("checkButton");
const result = document.getElementById("result");

checkButton.addEventListener("click", function() {
    const selectedAnswer = document.querySelector(
        'input[name="answer"]:checked'
    );

    if (selectedAnswer && selectedAnswer.value === "5") {
        result.textContent = "Correct";
    } else {
        result.textContent = "Try again";
    }
});