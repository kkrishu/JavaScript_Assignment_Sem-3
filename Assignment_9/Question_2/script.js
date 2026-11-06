// Name: Your Name
// Roll Number: Your Roll Number
// Assignment: 9 - Question 2

function validateForm(name) {
    const errors = [];

    if (name.trim() === "") {
        errors.push("Name is required");
    }

    return errors;
}

console.log(validateForm("Asha"));
console.log(validateForm(""));