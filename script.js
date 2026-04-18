<!-- ===================== script.js ===================== -->
function scrollToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

function sendMessage(event) {
  event.preventDefault();
  document.getElementById("successMsg").innerText = "Message sent successfully!";
}
