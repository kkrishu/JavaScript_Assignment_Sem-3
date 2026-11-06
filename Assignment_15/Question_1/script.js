// Name: Your Name
// Roll Number: Your Roll Number
// Assignment: 15 - Question 1

function checkMarks(marks) {
    return new Promise((resolve, reject) => {
        if (marks >= 0 && marks <= 100) {
            resolve(marks);
        } else {
            reject(new Error("Marks out of range"));
        }
    });
}

checkMarks(80)
    .then(value => console.log(value))
    .catch(error => console.log(error.message));