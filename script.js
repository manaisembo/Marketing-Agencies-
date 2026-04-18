function scrollToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

function sendMessage(event) {
  event.preventDefault();
  document.getElementById("successMsg").innerText =
    "Request sent successfully. We will contact you soon!";
}
