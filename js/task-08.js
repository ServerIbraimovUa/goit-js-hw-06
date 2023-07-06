const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", regSubmit);

function regSubmit(evt) {
  evt.preventDefault();
  const emailVal = formEl.elements.email.value.trim();
  const passwordVal = formEl.elements.password.value.trim();
  if (passwordVal === "" || emailVal === "") {
    return alert("Всі поля мають бути заповнені!!");
  }
  const userData = {
    email: emailVal,
    password: passwordVal,
  };
  console.log(userData);
  evt.currentTarget.reset();

  //!================================

  //   const { email: emailVal, password: passwordVal } = evt.currentTarget.elements;
  //   if (passwordVal.value === "" || emailVal.value === "") {
  //     alert("Всі поля мають бути заповнені!!");
  //   } else {
  //     const userData = {
  //       email: emailVal.value,
  //       password: passwordVal.value,
  //     };
  //     console.log(userData);
  //     formEl.reset();
  //   }
}
