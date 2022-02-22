const messages = [
    "Milo",
    "Nicolai",
    "Price",
    "Soap",
    "Cortana",
    "Mariana",
    "Mayra",
    "Chuy",
    "Caroline",
    "Margaret",
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = { randomMsg };
