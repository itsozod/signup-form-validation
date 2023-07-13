const form = document.getElementById("form");
const loginForm = document.getElementById("loginForm");
const email = document.getElementById("email");
const emailLogin = document.getElementById("email-login");
const password = document.getElementById("password");
const passwordLogin = document.getElementById("password-login");
const password2 = document.getElementById("password2");
const pwShowHide = document.querySelectorAll(".pw_hide");
const mainBtn = document.querySelector(".mainBtn");
const formClose = document.querySelector(".form-close");
const formContainer = document.querySelector(".form-container");
const signupShowBtn = document.querySelector("#signup-show");
const loginShowBtn = document.querySelector("#login-show");
const signUpForm = document.querySelector(".signup-form");
const logInForm = document.querySelector(".login-form");
const home = document.querySelector(".home");
const click = document.querySelector(".click");

mainBtn.addEventListener("click", () => {
    formContainer.classList.add("show");
    home.classList.add("dark");
    click.style.display = "none";
});

formClose.addEventListener("click", () => {
    formContainer.classList.remove("show");
    home.classList.remove("dark");
    click.style.display = "block";
});

signupShowBtn.addEventListener("click", () => {
    logInForm.classList.add("noshow");
    signUpForm.classList.add("show");
});
loginShowBtn.addEventListener("click", () => {
    logInForm.classList.remove("noshow");
    signUpForm.classList.remove("show");
});


form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = "";
    inputControl.classList.add('success');
    inputControl.classList.remove('error');

};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const emailValue = email.value.trim();
    const emailLoginValue = emailLogin.value.trim();
    const passwordValue = password.value.trim();
    const passwordLoginValue = passwordLogin.value.trim();
    const password2Value = password2.value.trim();

    if (emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if (emailLoginValue === '') {
        setError(emailLogin, 'Email is required');
    } else if (!isValidEmail(emailLoginValue)) {
        setError(emailLogin, 'Provide a valid email address');
    } else {
        setSuccess(emailLogin);
    }

    if (passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 characters');
    } else if (passwordValue.length > 10) {
        setError(password, "Password must be 10 characters");
    } else {
        setSuccess(password);
    }

    if (passwordLoginValue === '') {
        setError(passwordLogin, 'Password is required');
    } else if (passwordLoginValue.length < 8) {
        setError(passwordLogin, 'Password must be at least 8 characters');
    } else if (passwordLoginValue.length > 10) {
        setError(passwordLogin, "Password must be 10 characters");
    } else {
        setSuccess(passwordLogin);
    }

    if (password2Value === '') {
        setError(password2 , 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords don't match");
    } else {
        setSuccess(password2);
    }
};

pwShowHide.forEach(icon => {
    icon.addEventListener("click", () => {
      let getPwInput = icon.parentElement.querySelector("input");
      console.log(getPwInput);
      if (getPwInput.type === "password") {
        getPwInput.type = "text";
        icon.classList.replace("uil-eye-slash", "uil-eye");
      } else {
        getPwInput.type = "password";
        icon.classList.replace("uil-eye", "uil-eye-slash");
      }
    });
  });