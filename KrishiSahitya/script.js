// JavaScript to handle dynamic login and UI updates
document.addEventListener("DOMContentLoaded", () => {
    const userOptions = document.getElementById("user-options");
    const loginLink = document.getElementById("login-link");
    const sellLink = document.getElementById("sell-link");

    // Check if the user is logged in (using localStorage for simplicity)
    const isLoggedIn = localStorage.getItem("loggedInUser");
    const username = localStorage.getItem("username"); // Retrieve stored username

    if (isLoggedIn) {
        // Update the UI for a logged-in user
        userOptions.innerHTML = `
            <div class="user-info">
                <span class="user-icon">👤</span>
                <span class="username">${username}</span>
            </div>
            <button class="logout-btn" onclick="logout()">Logout</button>
        `;
    } else {
        // Default state (not logged in)
        loginLink.style.display = "inline-block";
        sellLink.style.display = "inline-block";
    }
});

// Simulate user login (for demonstration purposes)
function login(username) {
    localStorage.setItem("loggedInUser", true);
    localStorage.setItem("username", username);
    window.location.reload(); // Refresh the page to update the UI
}

// Simulate user logout
function logout() {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("username");
    window.location.reload(); // Refresh the page to update the UI
}

// Search functionality placeholder
function searchProducts() {
    alert("Search functionality is coming soon!");
}
