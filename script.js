document.addEventListener("DOMContentLoaded", () => {
  const videos = document.querySelectorAll(".bg-video");
  let current = 0;

  // Safety check (VERY IMPORTANT)
  if (videos.length === 0) return;

  // Ensure only first video is active at start
  videos.forEach((video, index) => {
    video.classList.remove("active");
    if (index === 0) video.classList.add("active");
  });

  function changeVideo() {
    videos[current].classList.remove("active");

    current = (current + 1) % videos.length;

    videos[current].classList.add("active");
  }

  setInterval(changeVideo, 5000);
});
