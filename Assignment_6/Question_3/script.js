// Name: Your Name
// Roll Number: Your Roll Number
// Assignment: 6 - Question 3

const jsonText = "{name: Rohan}";

try {
    const data = JSON.parse(jsonText);
    console.log(data);
} catch (error) {
    console.log("Invalid JSON");
}