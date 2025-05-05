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
      const reply = getCannedResponse(msg);
      appendMessage("MentorBot", reply);
    }, 500);
  }

  function appendMessage(sender, text) {
    const msgDiv = document.createElement("div");
    msgDiv.classList.add("chat-message");
    msgDiv.innerHTML = `<strong>${sender}:</strong> ${text}`;
    log.appendChild(msgDiv);
    log.scrollTop = log.scrollHeight;
  }

  function getCannedResponse(userInput) {
    const text = userInput.toLowerCase();

    if (text.includes("resume")) {
      return "Great question! Use clear formatting, action verbs, and tailor your resume to the job description.";
    } else if (text.includes("interview")) {
      return "Remember to research the company, prepare STAR-based answers, and ask thoughtful questions.";
    } else if (text.includes("mentor")) {
      return "You can find mentors through LinkedIn, alumni networks, or by asking a professor or coworker.";
    } else if (text.includes("network")) {
      return "Start by connecting with classmates, joining clubs, and reaching out to professionals on LinkedIn.";
    }

    return "That's a great question! I'm still learning, but try asking about resumes, interviews, mentors, or networking.";
  }

  // Event listeners
  sendBtn.addEventListener("click", sendMessage);
  input.addEventListener("keydown", e => {
    if (e.key === "Enter") sendMessage();
  });
});
