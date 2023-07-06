function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const control = document.querySelector("#controls");

const boxEl = document.querySelector("#boxes");
const createBtn = control.querySelector("button[data-create]");
const destroyBtn = control.querySelector("button[data-destroy]");

createBtn.addEventListener("click", onCreateClick);

// console.log(input.valueAsNumber);
function onCreateClick(evt) {
  const inputVal = control.querySelector("input").value;

  createBoxes(inputVal);
}

destroyBtn.addEventListener("click", onDestroyBtn);

function onDestroyBtn() {
  boxEl.innerHTML = "";
  const inputVal = control.querySelector("input");
  inputVal.value = "";
}
function createBoxes(amount) {
  const arr = [];
  let step = 30;
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.backgroundColor = getRandomHexColor();
    div.style.width = `${step}px`;
    div.style.height = `${step}px`;
    arr.push(div);
    step += 10;
  }
  boxEl.append(...arr);
}
