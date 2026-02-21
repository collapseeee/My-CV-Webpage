// Dark/Light Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const htmlElement = document.documentElement;

themeToggle.addEventListener("click", () => {
  const currentTheme = htmlElement.getAttribute("data-bs-theme");

  if (currentTheme === "dark") {
    htmlElement.setAttribute("data-bs-theme", "light");
    themeIcon.classList.replace("fa-moon-o", "fa-sun-o");
  } else {
    htmlElement.setAttribute("data-bs-theme", "dark");
    themeIcon.classList.replace("fa-sun-o", "fa-moon-o");
  }
});

// To Top Button display when scrolled.
const totopButton = document.getElementById("totop-button");
var screenHeight = screen.availHeight;

window.addEventListener("scroll", () => {
  if (window.scrollY > screenHeight * 0.5) {
    totopButton.style.display = "block";
  } else {
    totopButton.style.display = "none";
  }
});

// Send Message
// Display when clicked on send me a message button
// Close when clicked on close button
const sendMessageContainer = document.querySelector(".send-message-container");
const sendMessageButton = document.getElementById("send-message-button");
const messageCloseButton = document.getElementById("message-close-button");
const sendMessageForm = document.getElementById("send-message-form");

sendMessageButton.addEventListener("click", () => {
  sendMessageContainer.style.display = "block";
  sendMessageButton.disabled = true;
});

messageCloseButton.addEventListener("click", () => {
  sendMessageContainer.style.display = "none";
  sendMessageButton.disabled = false;
});

sendMessageForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const mail = document.getElementById("userEmail").value;
  const subject = document.getElementById("subjectText").value;
  const message = document.getElementById("messageText").value;

  const mailtoLink = `mailto:nattikorndev@gmail.com?subject=${encodeURIComponent(subject)}&body=From: ${mail}%0D%0A%0D%0A${encodeURIComponent(message)}`;
  alert("Please proceed on your email client to send the message.");
  window.location.href = mailtoLink;
});

// Small play on my profile picture.
const myImage = document.getElementById("my-image");
let degree = 0;
let clickCounter = 0;
myImage.addEventListener("click", () => {
  degree += 360;
  myImage.style.transform = `rotate(${degree}deg)`;
  myImage.style.transition = "transform 1s";

  clickCounter++;
  if (clickCounter === 10) {
    alert("Stop clicking on me!");
    clickCounter = 0;
    degree = 0;
  }
});
