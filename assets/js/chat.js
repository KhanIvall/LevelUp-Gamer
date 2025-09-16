// chat.js
document.addEventListener("DOMContentLoaded", () => {
  const chatButton = document.getElementById("chatButton");
  const chatBox = document.getElementById("chatBox");
  const chatClose = document.getElementById("chatClose");

  chatButton.addEventListener("click", () => {
    chatBox.style.display = chatBox.style.display === "flex" ? "none" : "flex";
  });

  chatClose.addEventListener("click", () => {
    chatBox.style.display = "none";
  });
});
