const openPopupButton = document.getElementById('sign-up-button');
const closePopupButton = document.getElementById('close-popup');
const popup = document.getElementById('popup');

openPopupButton.addEventListener('click', () => {
    popup.style.display = 'block';
});

closePopupButton.addEventListener('click', () => {
    popup.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none';
    }
});

// Get the chat button, chat box, and message-related elements
const chatButton = document.getElementById("chat-button");
const chatBox = document.getElementById("chat-box");
const closeChatButton = document.getElementById("close-chat");
const chatInput = document.getElementById("chat-input");
const sendMessageButton = document.getElementById("send-message");
const chatMessages = document.getElementById("chat-messages");

// Toggle the visibility of the chat box when the Chat button is clicked
chatButton.addEventListener("click", function () {
  chatBox.style.display = "block";
});

// Close the chat box when clicking the "Close" button
closeChatButton.addEventListener("click", function () {
  chatBox.style.display = "none";
});

// Close the chat box when clicking outside of it
document.addEventListener("click", function (event) {
  if (!chatButton.contains(event.target) && !chatBox.contains(event.target)) {
    chatBox.style.display = "none";
  }
});

// Handle message submission when the "Send" button is clicked
sendMessageButton.addEventListener("click", function () {
  const messageText = chatInput.value.trim();
  if (messageText) {
    const messageItem = document.createElement("li");
    messageItem.textContent = messageText;
    chatMessages.appendChild(messageItem);
    chatInput.value = ""; // Clear the input field
    chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to the latest message
  }
});

// Prevent the chat box from closing when clicking inside it
chatBox.addEventListener("click", function (event) {
  event.stopPropagation();
});

// Get the order button
const orderButton = document.getElementById("order-button");

// Event listener to navigate to the menu page
orderButton.addEventListener("click", function () {
  // Redirect to the menu page (menu.html)
  window.location.href = "menu.html";
});

// Get the necessary elements
const signUpButton = document.getElementById("sign-up-button");
const closePopup = document.getElementById("close-popup");
const signupForm = document.getElementById("signup-form");
const userIcon = signUpButton.querySelector("i.fa-solid.fa-user-plus");

// Add a click event listener to the sign-up button
signUpButton.addEventListener("click", () => {
  // Display the popup when the button is clicked
  popup.style.display = "block";
});

// Add a click event listener to close the popup
closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});

// Add a submit event listener to the signup form
signupForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form submission for this example

  // Get the user's input values
  const fullName = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;

  // Update the sign-up button text and icon
  signUpButton.innerHTML = `<i class="fa-solid fa-user"></i> ${fullName}`;

  // Display the user's name and email
  alert(`User: ${fullName}\nEmail: ${email}`);

  // Close the popup
  popup.style.display = "none";
});

const stars = document.querySelectorAll(".star");
    const ratingFeedback = document.querySelector(".rating-feedback");
    const reviewInput = document.getElementById("review");
    const submitButton = document.getElementById("submit");
    const userRating = document.getElementById("user-rating");

    let selectedRating = 0;

    stars.forEach((star) => {
        star.addEventListener("click", () => {
            selectedRating = parseInt(star.getAttribute("data-star"));
            updateStarRating();
        });
    });

    submitButton.addEventListener("click", () => {
        if (selectedRating === 0) {
            ratingFeedback.textContent = "Please select a rating.";
            return;
        }

        const reviewText = reviewInput.value;
        userRating.innerHTML = `<p>Your Rating: ${selectedRating} stars</p><p>Your Review: ${reviewText}</p>`;
    });

    function updateStarRating() {
        stars.forEach((star) => {
            const starValue = parseInt(star.getAttribute("data-star"));
            if (starValue <= selectedRating) {
                star.style.color = "gold";
            } else {
                star.style.color = "gray";
            }
        });

        ratingFeedback.textContent = `You rated our service ${selectedRating} stars.`;
    }