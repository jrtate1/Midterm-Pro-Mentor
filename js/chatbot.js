document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("chat-input");
    const sendBtn = document.getElementById("send-btn");
    const log = document.getElementById("chat-log");
  
    function sendMessage() {
      const msg = input.value.trim();
      if (msg === "") return;
  
      appendMessage("You", msg);
      input.value = "";
  
      setTimeout(() => {
        const botReply = generateBotResponse(msg);
        appendMessage("MentorBot", botReply);
      }, 500);
    }
  
    function appendMessage(sender, text) {
      const msgDiv = document.createElement("div");
      msgDiv.classList.add("chat-message");
      msgDiv.innerHTML = `<strong>${sender}:</strong> ${text}`;
      log.appendChild(msgDiv);
      log.scrollTop = log.scrollHeight;
    }
  
    function generateBotResponse(userInput) {
      const lower = userInput.toLowerCase();
      return "Hi! This feature is still a work in progress.";
    }
  
    // Event listeners
    sendBtn.addEventListener("click", sendMessage);
    input.addEventListener("keydown", e => {
      if (e.key === "Enter") sendMessage();
    });
  });
  