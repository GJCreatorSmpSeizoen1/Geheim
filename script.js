const clues = [
    "Sommige dingen zie je pas als je goed kijkt.",
    "De eerste aanwijzing is dichterbij dan je denkt.",
    "Niet alles staat op de voorgrond.",
    "Er zijn meerdere aanwijzingen verborgen.",
    "Je bent nog maar net begonnen..."
];

let clueIndex = 0;

function changeMessage() {
    const text = document.getElementById("message");

    text.style.opacity = "0";

    setTimeout(() => {
        text.textContent = clues[clueIndex];
        text.style.opacity = "1";

        clueIndex++;

        if (clueIndex >= clues.length) {
            clueIndex = 0;
        }
    }, 200);
}

document.addEventListener("keydown", function(event) {
    if (event.key === "x" || event.key === "X") {
        document.body.classList.toggle("secret-mode");
    }
});
