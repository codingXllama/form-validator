const form = document.getElementById("form");
const password1_Element = document.getElementById("password1");
const password2_Element = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");
const regBtn = document.getElementById("regBtn");
console.log("hi");

let isValid = false;
let passwordMatch = false;

function validateForm() {
  // Using the constraint API
  isValid = form.checkValidity();
  // alert("jo");
  if (!isValid) {
    // styling the main message css for invalid attempt
    message.textContent = "Please Fill Out All Fields!";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
  }
  // Check to see if passwords are match
  if (password1_Element.value === password2_Element.value) {
    passwordMatch = true;
    password1_Element.style.borderColor = "green";
    password2_Element.style.borderColor = "green";
    alert("match!");
  } else {
    passwordMatch = false;
    message.textContent = "Make sure passwords match.";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    password1_Element.style.borderColor = "red";
    password2_Element.style.borderColor = "red";
  }
  // If the form is valid and passwords match
  if (isValid && passwordMatch) {
    message.textContent = "Successfully Registered!";
    message.style.color = "green";
    messageContainer.style.borderColor = "green";
  }
}

function processFormData(e) {
  e.preventDefault(); // prevents the page from refreshing

  // console.log("test");
  // Validating the from
  validateForm();
}

// Event Listener
form.addEventListener("submit", processFormData);
