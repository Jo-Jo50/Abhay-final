/* BACKGROUND IMAGE SLIDER */
const bgPhotos = document.querySelectorAll(".bg-photo");
let currentIndex = 0;
setInterval(() => {
  bgPhotos[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % bgPhotos.length;
  bgPhotos[currentIndex].classList.add("active");
}, 4500); // change every 4.5s

/* HEART FLOW EFFECT */
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = "💖";
  heart.style.left = Math.random() * window.innerWidth + "px";

  // start at bottom
  heart.style.top = window.innerHeight + "px";

  heart.style.fontSize = (12 + Math.random() * 30) + "px";
  heart.style.animationDuration = (4 + Math.random() * 4) + "s";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 9000);
}
setInterval(createHeart, 150); // many hearts continuously

/* YES/NO LOGIC */
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const question = document.getElementById("valentineQuestion");
const musicBtn = document.getElementById("musicBtn");
const letterBtn = document.getElementById("letterBtn");

let noClicked = false;
noBtn.addEventListener("click", () => {
  if (!noClicked) {
    noClicked = true;
    noBtn.style.position = "absolute";
    setInterval(() => {
      noBtn.style.left = Math.random() * (window.innerWidth - noBtn.offsetWidth) + "px";
      noBtn.style.top = Math.random() * (window.innerHeight - noBtn.offsetHeight) + "px";
    }, 300);
  }
});

yesBtn.addEventListener("click", () => {
  question.style.display = "none"; // hide question
  musicBtn.style.display = "block"; // show music control
  letterBtn.style.display = "block"; // show love letter
});

/* MUSIC BUTTON */
const bgMusic = new Audio("audio/music.mp3");
bgMusic.loop = true;

musicBtn.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play();
    musicBtn.textContent = "⏸ Pause Music";
  } else {
    bgMusic.pause();
    musicBtn.textContent = "🎵 Play Music";
  }
});

/* LOVE LETTER POPUP */
const modal = document.getElementById("loveLetterPopup");
const closeLetter = document.getElementById("closeLetter");
const letterContent = document.getElementById("letterContent");

letterBtn.addEventListener("click", () => {
  modal.style.display = "block";
  letterContent.textContent = ""; // clear first

  const text = `My Dearest Love,

Every moment with you feels magical. Your smile lights up my world and your laughter grows warmth within my heart.

Will you join me for a romantic dinner tonight?

With all my love,
[Your Name]`;

  let i = 0;
  const typeWriter = setInterval(() => {
    if (i < text.length) letterContent.textContent += text[i++];
    else clearInterval(typeWriter);
  }, 30);
});

closeLetter.addEventListener("click", () => {
  modal.style.display = "none";
});
