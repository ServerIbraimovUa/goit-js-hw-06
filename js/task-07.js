const rangeEl = document.querySelector("#font-size-control");
console.dir(rangeEl);
const spanEl = document.querySelector("#text");

rangeEl.addEventListener("input", onRange);

function onRange(evt) {
  const value = evt.currentTarget.value;
  spanEl.style.fontSize = `${value}px`;
}
