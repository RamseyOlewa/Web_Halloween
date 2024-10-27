const sendBtn = document.getElementById("sendBtn");
const userInput = document.getElementById("userInput");
const chatlog = document.getElementById("chatlog");
const laughAudio = document.getElementById("laughAudio");
const whisperAudio = document.getElementById("whisperAudio");

// Function to handle user input
function handleUserInput() {
  const userText = userInput.value.trim();
  if (userText) {
    displayMessage(`You: ${userText}`);
    processCommand(userText.toLowerCase());
    userInput.value = ""; // Clear input field
  }
}

// Function to display messages in chat log
function displayMessage(message) {
  const messageElement = document.createElement("div");
  messageElement.textContent = message;
  chatlog.appendChild(messageElement);
  chatlog.scrollTop = chatlog.scrollHeight; // Scroll to the bottom
}

// Function to process commands
function processCommand(command) {
  switch (command) {
    case "laugh":
      laughAudio.play();
      displayMessage("Chatbot: Ha ha ha!"); // Display response
      break;
    case "speak":
      whisperAudio.play();
      displayMessage("Chatbot: I am here..."); // Display response
      break;
    case "halloween":
      displayMessage(
        "Chatbot: Halloween is a chilling experience. Halloween's origins can be traced back to the ancient Celtic festival known as Samhain, which was held on November 1 in contemporary calendars. It was believed that on that day, the souls of the dead returned to their homes, so people dressed in costumes and lit bonfires to ward off spirits."(
          laughAudio.play()
        )
      ); // Display response
      break;
    default:
      displayMessage("Chatbot: I didn't understand that."); // Default response
  }
}

// Add event listener to send button
sendBtn.addEventListener("click", handleUserInput);

// Add event listener for Enter key
userInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    handleUserInput();
  }
});
