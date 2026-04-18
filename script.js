const videos = document.querySelectorAll(".bg-video");
let current = 0;

function changeVideo() {
  videos[current].classList.remove("active");

  current = (current + 1) % videos.length;

  videos[current].classList.add("active");
}

setInterval(changeVideo, 5000);
