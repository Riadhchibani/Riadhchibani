const taglines = [
  "Backend developer crafting reliable systems with Java and aiming for AI excellence. 🚀",
  "From robust backend solutions to AI breakthroughs—always moving forward. 💡📈",
  "Growing every day with Java, backend expertise, and an eye on the AI horizon. 🔍✨",
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

// scrollUp

const scrollToTopButton = document.getElementById("scrollToTop");

// Show the button when the user scrolls down 100px from the top
window.onscroll = function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollToTopButton.innerHTML = "🙄";
  } else {
    scrollToTopButton.innerHTML = "😊";
  }
};

// When the button is clicked, scroll to the top
scrollToTopButton.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scroll effect
  });
};

//email section

emailjs.init("jYefY8nFcG4tKDXVb"); // Your EmailJS user ID

const commentForm = document.getElementById("sendId");
const commentText = document.getElementById("message");
const emailInput = document.getElementById("email");

// Listen for form submission
commentForm.addEventListener("click", function (e) {
  e.preventDefault(); // Prevent default form submission

  // Get the comment and email values
  const comment = commentText.value;
  const userEmail = emailInput.value;

  // Define your email addresses
  const ownerEmail = "riadh.hello.world@gmail.com"; // Replace with your email

  // Send email to the commenter (confirmation email)
  emailjs.send("service_d936ios", "template_pbethnk", {    
    to_email: userEmail, // Send to the commenter's email (userEmail)
    subject: "Thank you for your comment!", // Subject of the email
    message: comment, // The comment message the user submitted
    from_email: userEmail
  })
  .then(function (response) {
    // console.log(userEmail);
    // console.log("Email sent to commenter:", response);
  })
  .catch(function (error) {
    //console.error("Error sending email to commenter:", error);
  });

  // Send email to the website owner (notification)
  emailjs.send("service_d936ios", "template_3lrzu1j", {
    to_email: ownerEmail, // Replace with your email address
    subject: "New comment on your website", // Subject of the email
    message: comment, // The comment message
    from_email: userEmail, // The email address of the person who left the comment
  })
  .then(function (response) {
   // console.log("Email sent to owner:", response);
    // Optionally, you can display the comment on the page
  })
  .catch(function (error) {
   // console.error("Error sending email to owner:", error);
  });
});

