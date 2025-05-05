// Handle form submission
document.getElementById("mentor-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Stop page from reloading

    const interest = document.getElementById("interest").value;
    const experience = document.getElementById("experience").value;

    const resultText = `✅ You’ll be matched with a mentor in "${interest}" at "${experience}" level!`;
    document.getElementById("match-result").textContent = resultText;
});
