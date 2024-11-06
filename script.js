const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const progressBar = document.getElementById("progress-bar");
const submitBtn = document.getElementById("submit-btn");

const nameCheck = document.getElementById("name-check");
const emailCheck = document.getElementById("email-check");
const passwordLengthCheck = document.getElementById("password-length-check");
const passwordMatchCheck = document.getElementById("password-match-check");

function togglePassword() {
    const passwordField = document.getElementById("password");
    passwordField.type = passwordField.type === "password" ? "text" : "password";
}

function validateForm() {
    let progress = 0;

    //check full name
    if (fullname.value.trim().length > 0) {
        nameCheck.classList.add("completed");
        progress += 25;
    }
    else {
        nameCheck.classList.remove("completed");
    }

    //check email
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/i;
    if (emailPattern.test(email.value)) {
        emailCheck.classList.add("completed");
        progress += 25;
    }
    else {
        emailCheck.classList.remove("completed");
    }

    //check password length
    if (password.value.trim().length >= 8) {
        passwordLengthCheck.classList.add("completed");
        progress += 25;
    }
    else {
        passwordLengthCheck.classList.remove("completed");
    }

    //check password match
    if (password.value === confirmPassword.value && password.value.length >= 8) {
        passwordMatchCheck.classList.add("completed");
        progress += 25;
    }
    else {
        passwordMatchCheck.classList.remove("completed");
    }

    //update progress bar
    progressBar.style.width = progress + "%";

    //enable or disable submit button
    // if (progress === 100) {
    //     submitBtn.disabled = false;
    // }
    submitBtn.disabled = progress < 100;
}

fullname.addEventListener("input", validateForm);
email.addEventListener("input", validateForm);
password.addEventListener("input", validateForm);
confirmPassword.addEventListener("input", validateForm);
