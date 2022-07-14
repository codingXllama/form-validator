const form = document.getElementById("form");
const password1_Element = document.getElementById("password1");
const password2_Element = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");
const regBtn = document.getElementById("regBtn");

let isValid = false;

function validateForm() {
  // Using the constraint API
  isValid = form.checkValidity();
  // styling the main message css for invalid attempt
  message.textContent = "Please Fill Out All Fields!";
  message.style.color = "red";
  messageContainer.style.borderColor = "red";
}

function processFormData(e) {
  e.preventDefault(); // prevents the page from refreshing

  // Validating the from
  validateForm();
}

// Event Listener
form.addEventListener("submit", processFormData);
