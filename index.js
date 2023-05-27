const FirstNameInput = document.querySelector("#first-name");
const lastNameInput = document.querySelector("#last-name");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const passwordInput = document.querySelector("#password");
const confirmPassInput = document.querySelector("#confirm-pass");

const firstNameError = document.querySelector("#first-name-error");
const lastNameError = document.querySelector("#last-name-error");
const emailError = document.querySelector("#email-error");
const phoneError = document.querySelector("#phone-error");
const passwordError = document.querySelector("#password-error");
const confirmPassError = document.querySelector("#confirm-pass-error");



FirstNameInput.addEventListener("input", () => {
  FirstNameInput.value.length > 0
    ? (firstNameError.innerHTML = "very nice")
    : (firstNameError.innerHTML = "Name should not be empty");
});

lastNameInput.addEventListener("input", () => {
  lastNameInput.value.length > 0
    ? (lastNameError.innerHTML = "very good")
    : (lastNameError.innerHTML = "Name should not be empty");
});

emailInput.addEventListener("input", () => {
  emailInput.value.length === ""
    ? (emailError.innerHTML = "Email should not be empty")
    : (emailError.innerHTML = "");
  emailInput.value.includes("@") && emailInput.value.includes(".")
    ? (emailError.innerHTML = "very good")
    : (emailError.innerHTML =
        "Email should be in the correct format use @ and .");
});

phoneInput.addEventListener("input", () => {
  let digitPattern = /^\d+$/;

  phoneInput.value.length === 10 && digitPattern.test(phoneInput.value)
    ? (phoneError.innerHTML = "thank you")
    : (phoneError.innerHTML = "phone number should only have 10 digits");
});


passwordInput.addEventListener("input", () => {
    var pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    // passwordInput.value.length === 10 && digitPattern.test(passwordInput.value)
        pattern.test(password.value)
      ? (passwordError.innerHTML = "thank you")
      : (passwordError.innerHTML = "password should have atleast 1 lowercase , 1 uppercase and 1 digit and must have more than 8 characters");
  });
  
  confirmPassInput.addEventListener("input", () => {
        passwordInput.value === confirmPassInput.value
      ? (confirmPassError.innerHTML = "thank you")
      : (confirmPassError.innerHTML = "passwords dont match");
  });
  