const taglines = [
    "Backend developer crafting reliable systems with Java and aiming for AI excellence. 🚀",
    "From robust backend solutions to AI breakthroughs—always moving forward. 💡📈",
    "Growing every day with Java, backend expertise, and an eye on the AI horizon. 🔍✨"
  ];

  let index = 0;

  function displayTagline() {
    const taglineElement = document.getElementById("tagline");
    taglineElement.style.opacity = 0; // Start fading out

    setTimeout(() => {
      taglineElement.textContent = taglines[index]; // Change text
      taglineElement.style.opacity = 1; // Fade in
    }, 1000); // Wait for the fade-out effect to complete before updating

    index = (index + 1) % taglines.length; // Cycle through the taglines
  }

  setInterval(displayTagline, 4000); // Change tagline every 2 seconds

  displayTagline();