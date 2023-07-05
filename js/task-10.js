function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const control = document.querySelector("#controls");
const boxEl = document.querySelector("#boxes");
const createBtn = controlsDiv.querySelector("button[data-create]");
const destroyBtn = controlsDiv.querySelector("button[data-destroy]");
function createBoxes(amount) {}
