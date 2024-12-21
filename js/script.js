// Form Validation
const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
  let isValid = true;

  // Reset previous error messages
  document.querySelectorAll(".error-message").forEach((error) => {
    error.textContent = "";
  });

  // Name validation
  const name = document.getElementById("name");
  if (name.value.trim() === "") {
    document.getElementById("name-error").textContent = "Name is required.";
    isValid = false;
  }

  // Email validation
  const email = document.getElementById("email");
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.value.match(emailPattern)) {
    document.getElementById("email-error").textContent = "Please enter a valid email address.";
    isValid = false;
  }

  // Message validation
  const message = document.getElementById("message");
  if (message.value.trim() === "") {
    document.getElementById("message-error").textContent = "Message is required.";
    isValid = false;
  }

  // Prevent form submission if invalid
  if (!isValid) {
    event.preventDefault();
  }
});
