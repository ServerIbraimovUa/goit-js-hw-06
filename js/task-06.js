const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onBlur);
const id = Number(inputEl.dataset.length);
function onBlur(evt) {
  const inputVal = evt.currentTarget.value;

  inputEl.classList.remove("invalid", "valid");
  if (inputVal.length !== id) {
    return inputEl.classList.add("invalid");
  }
  if (inputVal.length === id) {
    return inputEl.classList.add("valid");
  }
}
