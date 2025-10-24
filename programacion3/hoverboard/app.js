const SQUARES = 418;

const COLORS = ["#57CC99", "#D81E5B", "#053C5E", "#9893DA", "#FCD581",];

const $main = document.getElementById("container");

function generateSquares(squares = 400) {
    for (let i = 0; i < squares; i++) {
        const $square = document.createElement("div");
        $square.classList.add("square");

        $square.addEventListener("mouseover", () => setColor($square));
        $square.addEventListener("mouseout", () => removeColor($square));

        $main.appendChild($square);
    }
}

function setColor(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
    element.style.backgroundColor = "var(--secondary-color)";
    element.style.boxShadow = "0 0 2px var(--tertiary-color)";
}

function getRandomColor() {
    const random = Math.floor(Math.random() * COLORS.length);
    return COLORS[random];
}

generateSquares(SQUARES);