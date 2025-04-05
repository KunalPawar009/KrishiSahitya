// Select elements from the DOM
const forms = document.querySelector(".forms");
const pwShowHide = document.querySelectorAll(".eye-icon");
const links = document.querySelectorAll(".link");

// Add smooth scrolling for better user experience
document.querySelectorAll(".login-btn, .sell-btn").forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default behavior
    document.body.style.transition = "opacity 1s ease";
    document.body.style.opacity = "0";

    // Redirect after delay
    setTimeout(() => {
      window.location.href = "login.html";
    }, 1000); // Matches 1s transition duration
  });
});

// Password show/hide functionality
pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    const pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
    pwFields.forEach((password) => {
      if (password.type === "password") {
        password.type = "text"; // Show password
        eyeIcon.classList.replace("bx-hide", "bx-show"); // Change icon
      } else {
        password.type = "password"; // Hide password
        eyeIcon.classList.replace("bx-show", "bx-hide"); // Change icon back
      }
    });
  });
});

// Toggle between Login and Signup forms
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default behavior
    forms.classList.toggle("show-signup");
  });
});

// Validate signup form
function validateSignup() {
  const username = document.querySelector(".signup input[placeholder='Username']").value;
  const email = document.querySelector(".signup input[placeholder='Email']").value;
  const password = document.querySelector(".signup input[placeholder='Create password']").value;
  const confirmPassword = document.querySelector(".signup input[placeholder='Confirm password']").value;

  if (!username) {
    alert("Username is required!");
    return false;
  }

  if (!email) {
    alert("Email is required!");
    return false;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match! Please try again.");
    return false;
  }

  return true; // Allow form submission
}

// Smooth fade-in effect on page load
window.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = "1";
  document.body.style.transition = "opacity 1s ease"; // Smooth fade-in
});

// Redirect user to login page
function redirectToLogin() {
  window.location.href = "login.html";
}

function redirectToHome() {
  window.location.href = "Home.html";
}

// Placeholder function for search products
function searchProducts() {
  alert("Search functionality is coming soon!");
}

// Handle login button click (validate and redirect)
document.querySelector(".login button").addEventListener("click", (e) => {
  e.preventDefault();
  const email = document.querySelector(".login input[placeholder='Email']").value;
  const password = document.querySelector(".login input[placeholder='Password']").value;

  if (email && password) {
    // Perform additional validation or authentication here if needed
    alert("Login successful! Redirecting...");
    redirectToHome(); // Redirect to a different page
  } else {
    alert("Please fill in all fields!");
  }
});

// Handle signup button click
document.querySelector(".signup button").addEventListener("click", (e) => {
  e.preventDefault();
  if (validateSignup()) {
    const username = document.querySelector(".signup input[placeholder='Username']").value;
    // Store the username statically (e.g., in a variable)
    const usernameElement = document.getElementById("username");
    usernameElement.textContent = username; // Set the username text after signup

    alert("Signup successful!");
    forms.classList.remove("show-signup"); // Switch to login form
  }
});
