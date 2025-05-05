document.addEventListener("DOMContentLoaded", () => {
    const tips = [
        "Tailor your resume to each role you apply for.",
        "Network with alumni and professionals on LinkedIn.",
        "Practice mock interviews with a friend or mentor.",
        "Always send a thank-you note after interviews.",
        "Don’t be afraid to ask for informational interviews.",
        "Be clear about your goals when seeking mentorship.",
        "Keep a spreadsheet to track jobs you’ve applied to.",
        "Use the STAR method to answer behavioral questions.",
        "Don’t wait for opportunities—create your own.",
        "Follow up politely after job fairs or events.",
        "Quality over quantity: apply thoughtfully, not blindly.",
        "Mentorship is mutual—bring value to the relationship.",
        "Ask for feedback regularly and apply it.",
        "Consistency beats intensity—stay persistent!",
        "Be kind to yourself during the job hunt."
      ];      
  
    let currentTip = 0;
    const tipText = document.getElementById("tipText");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");
  
    function updateTip(index) {
      tipText.textContent = tips[index];
    }
  
    nextBtn.addEventListener("click", () => {
      currentTip = (currentTip + 1) % tips.length;
      updateTip(currentTip);
    });
  
    prevBtn.addEventListener("click", () => {
      currentTip = (currentTip - 1 + tips.length) % tips.length;
      updateTip(currentTip);
    });
  
    // Auto-rotate every 5 seconds
    setInterval(() => {
      currentTip = (currentTip + 1) % tips.length;
      updateTip(currentTip);
    }, 5000);
  
    updateTip(currentTip);
  });
  