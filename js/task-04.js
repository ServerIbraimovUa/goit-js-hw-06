const counter = document.querySelector("#counter");
const counterValue = counter.querySelector("#value");
const decrementBtn = counter.querySelector('button[data-action="decrement"]');
const incrementBtn = counter.querySelector('button[data-action="increment"]');

// decrementBtn.addEventListener("click", decrementClick);
// incrementBtn.addEventListener("click", incrementClick);

// let count = 0;

// function decrementClick(evt) {
//   count -= 1;
//   counterValue.textContent = count;
// }
// function incrementClick(evt) {
//   count += 1;
//   counterValue.textContent = count;
// }

let count = 0;
decrementBtn.addEventListener("click", () => {
  count -= 1;
  counterValue.textContent = count;
});
incrementBtn.addEventListener("click", () => {
  count += 1;
  counterValue.textContent = count;
});
