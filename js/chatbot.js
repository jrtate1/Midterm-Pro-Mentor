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

  const keywordResponses = {
    resume: "Use clean formatting, action verbs, and tailor it to the job description. Keep it to one page if possible.",
    interview: "Research the company, practice STAR answers, and prep a few smart questions to ask at the end.",
    mentor: "Mentors can be found through LinkedIn, alumni networks, clubs, or even by asking a professor.",
    network: "Start small: talk to classmates, attend events, and message people on LinkedIn with shared interests.",
    linkedin: "Keep your profile clean and updated. Use a professional photo, add a strong headline, and list your experiences clearly.",
    coverletter: "Make it specific! Address the company by name, explain why you're a good fit, and show enthusiasm.",
    jobsearch: "Check sites like LinkedIn, Indeed, Handshake, and niche job boards. Set alerts for roles you're interested in.",
    internships: "Apply early, apply wide. Reach out to recruiters directly on LinkedIn. Consider unpaid roles if it gets your foot in the door.",
    confidence: "Imposter syndrome is real, but you're more capable than you think. Prep well and take things one step at a time.",
    rejection: "It happens to everyone. Reflect on what you learned, and move on stronger. Each 'no' gets you closer to a 'yes'.",
    portfolio: "Showcase 2–4 solid projects, keep the design simple, and add brief descriptions about your process and results.",
    negotiation: "Do your research (Glassdoor, Levels.fyi). Don’t be afraid to ask — even a small increase adds up over time.",
  };
  
  function getCannedResponse(userInput) {
    const text = userInput.toLowerCase();
    for (const keyword in keywordResponses) {
      if (text.includes(keyword)) {
        return keywordResponses[keyword];
      }
    }
    return "I'm here to help! Try asking about resumes, interviews, networking, or anything related to starting your career.";
  }  

  // Event listeners
  sendBtn.addEventListener("click", sendMessage);
  input.addEventListener("keydown", e => {
    if (e.key === "Enter") sendMessage();
  });
});
