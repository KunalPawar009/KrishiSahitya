const chatLog = document.getElementById("chat-log");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

// Replace with your AI API endpoint and API key
const API_URL = "https://api.openai.com/v1/chat/completions";
const API_KEY = "your_api_key_here"; // Replace with your OpenAI API key

// Add message to chat log
function addMessage(sender, message) {
    const messageDiv = document.createElement("div");
    messageDiv.textContent = `${sender}: ${message}`;
    chatLog.appendChild(messageDiv);
    chatLog.scrollTop = chatLog.scrollHeight; // Auto-scroll to the bottom
}

// Send user input to the AI API
async function sendMessage() {
    const userMessage = userInput.value.trim();
    if (!userMessage) return;

    addMessage("You", userMessage); // Add user's message to the chat log
    userInput.value = ""; // Clear the input field

    // Send user message to the AI API
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${API_KEY}`,
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo", // Specify the AI model
                messages: [{ role: "user", content: userMessage }],
            }),
        });

        const data = await response.json();
        const aiMessage = data.choices[0].message.content;

        addMessage("AI", aiMessage); // Add AI's response to the chat log
    } catch (error) {
        console.error("Error communicating with the AI API:", error);
        addMessage("AI", "Sorry, I'm having trouble responding right now. Please try again later.");
    }
}

// Add event listener to the Send button
sendBtn.addEventListener("click", sendMessage);

// Allow sending messages by pressing Enter
userInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        sendMessage();
    }
});
