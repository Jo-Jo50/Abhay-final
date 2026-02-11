/* =========================
   BACKGROUND IMAGE SLIDER
========================= */
const bgPhotos = document.querySelectorAll(".bg-photo");
let currentIndex = 0;
setInterval(() => {
  bgPhotos[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % bgPhotos.length;
  bgPhotos[currentIndex].classList.add("active");
}, 4500);


/* =========================
   HEART FLOW EFFECT
========================= */
const heartContainer = document.body; // append hearts to body

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = "💖";

  // random horizontal position
  heart.style.left = Math.random() * 100 + "vw";
  // random size
  heart.style.fontSize = (12 + Math.random() * 20) + "px";
  // random animation duration
  heart.style.animationDuration = (5 + Math.random() * 5) + "s";

  heartContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 10000);
}

// spawn hearts continuously
setInterval(createHeart, 300);


/* =========================
   YES/NO BUTTON LOGIC
========================= */
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const question = document.getElementById("valentineQuestion");
const musicBtn = document.getElementById("musicBtn");
const letterBtn = document.getElementById("letterBtn");

// music
let audio = new Audio("audio/music.mp3");
audio.loop = true;

// show/hide buttons
musicBtn.style.display = "none";
letterBtn.style.display = "none";

let noClicked = false;
noBtn.addEventListener("click", () => {
  if (!noClicked) {
    noClicked = true;
    // make it float around randomly
    noBtn.style.position = "absolute";
    const moveInterval = setInterval(() => {
      noBtn.style.left = Math.random() * (window.innerWidth - noBtn.offsetWidth) + "px";
      noBtn.style.top = Math.random() * (window.innerHeight - noBtn.offsetHeight) + "px";
    }, 300);
  }
});

yesBtn.addEventListener("click", () => {
  question.style.display = "none"; // hide question
  musicBtn.style.display = "block"; // show music button
  letterBtn.style.display = "block"; // show love letter button
});


/* =========================
   MUSIC BUTTON
========================= */
musicBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    musicBtn.textContent = "Pause Music 🎵";
  } else {
    audio.pause();
    musicBtn.textContent = "Play Music 🎵";
  }
});


/* =========================
   LOVE LETTER POPUP
========================= */
const modal = document.getElementById("loveLetterPopup");
const closeLetter = document.getElementById("closeLetter");
const letterContent = document.getElementById("letterContent");

letterBtn.addEventListener("click", () => {
  modal.style.display = "block";
  letterContent.textContent = "";

  const text = `My Dearest Love,

Every moment with you feels magical. Your smile lights up my world and your laughter grows warmth within my heart.

Will you join me for a romantic dinner tonight?

With all my love,
[Your Name]`;

  let i = 0;
  const typeWriter = setInterval(() => {
    if (i < text.length) {
      letterContent.textContent += text[i++];
      letterContent.scrollTop = letterContent.scrollHeight; // auto-scroll
    } else clearInterval(typeWriter);
  }, 30);
});

closeLetter.addEventListener("click", () => {
  modal.style.display = "none";
});
