const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onInput);
const id = Number(inputEl.dataset.length);
function onInput(evt) {
  const inputVal = evt.currentTarget.value;

  if (inputVal.length !== id) {
    inputEl.classList.add("invalid");
  }
  if (inputVal.length === id) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  }
  if (inputVal === "") {
    inputEl.classList.remove("invalid", "valid");
  }
}
