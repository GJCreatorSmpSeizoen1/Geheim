const messages = [
    "Je bent er bijna...",
    "Kijk goed om je heen.",
    "Niet alles is wat het lijkt.",
    "Er is meer verborgen.",
    "Blijf zoeken..."
];

let index = 0;

function changeMessage() {
    const text = document.getElementById("message");

    index = (index + 1) % messages.length;
    text.textContent = messages[index];
}
