// Name: Your Name
// Roll Number: Your Roll Number
// Assignment: 9 - Question 3

const noteInput = document.getElementById("note");
const saveButton = document.getElementById("saveButton");
const message = document.getElementById("message");

// Load saved note when page opens
noteInput.value = localStorage.getItem("note") || "";

saveButton.addEventListener("click", function() {
    localStorage.setItem("note", noteInput.value);
    message.textContent = "Note saved successfully!";
});