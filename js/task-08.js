const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", regSubmit);

function regSubmit(evt) {
  evt.preventDefault();
  const emailVal = formEl.elements.email.value;
  const passwordVal = formEl.elements.password.value;
  if (passwordVal === "" || emailVal === "") {
    alert("Всі поля мають бути заповнені!!");
  } else {
    const userData = {
      email: emailVal,
      password: passwordVal,
    };
    console.log(userData);
    formEl.reset();
  }

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
