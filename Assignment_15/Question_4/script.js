// Name: Your Name
// Roll Number: Your Roll Number
// Assignment: 15 - Question 4

function getUsers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const users = [
                { id: 1, name: "Asha" },
                { id: 2, name: "Rohan" },
                { id: 3, name: "Meera" }
            ];

            resolve(users);
        }, 100);
    });
}

async function displayUsers() {
    const users = await getUsers();

    users.forEach(user => {
        console.log(user.name);
    });
}

displayUsers();