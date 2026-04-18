const images = [
  "https://images.unsplash.com/photo-1556761175-4b46a572b786",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  "https://images.unsplash.com/photo-1553877522-43269d4ea984",
  "https://images.unsplash.com/photo-1557804506-669a67965ba0"
];

let index = 0;

function changeBackground() {
  const hero = document.querySelector(".hero");
  if (hero) {
    hero.style.backgroundImage = `url('${images[index]}')`;
    index = (index + 1) % images.length;
  }
}

changeBackground();
setInterval(changeBackground, 3500);
