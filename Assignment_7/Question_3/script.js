// Name: Your Name
// Roll Number: Your Roll Number
// Assignment: 7 - Question 3

function Student(name, marks) {
    this.name = name;
    this.marks = marks;
}

Student.prototype.result = function() {
    if (this.marks >= 40) {
        return "Pass";
    } else {
        return "Fail";
    }
};

const student1 = new Student("Asha", 88);

console.log(student1.result());