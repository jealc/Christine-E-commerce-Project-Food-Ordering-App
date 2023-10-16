// Get the menu button and the pop-up menu
const menuButton = document.getElementById("menu-button");
const popupMenu = document.getElementById("popup-menu");

// Toggle the visibility of the pop-up menu
menuButton.addEventListener("click", function () {
  if (popupMenu.style.display === "block") {
    popupMenu.style.display = "none";
  } else {
    popupMenu.style.display = "block";
  }
});

// Close the pop-up menu when clicking outside of it
document.addEventListener("click", function (event) {
  if (!menuButton.contains(event.target) && !popupMenu.contains(event.target)) {
    popupMenu.style.display = "none";
  }
});

// Get the cart button and the cart pop-up
const cartButton = document.getElementById("cart-button");
const cartPopup = document.getElementById("cart-popup");
const closeCartButton = document.getElementById("close-cart");

// Toggle the visibility of the cart pop-up when the Cart button is clicked
cartButton.addEventListener("click", function () {
  cartPopup.style.display = "block";
});

// Close the cart pop-up when clicking the "Close" button
closeCartButton.addEventListener("click", function () {
  cartPopup.style.display = "none";
});

// Close the cart pop-up when clicking outside of it
document.addEventListener("click", function (event) {
  if (!cartButton.contains(event.target) && !cartPopup.contains(event.target)) {
    cartPopup.style.display = "none";
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
