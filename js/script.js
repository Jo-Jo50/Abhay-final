/* =========================
   BACKGROUND IMAGE SLIDER
========================= */
const bgPhotos = document.querySelectorAll(".bg-photo");
let currentIndex = 0;
setInterval(() => {
  bgPhotos[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % bgPhotos.length;
  bgPhotos[currentIndex].classList.add("active");
}, 4500); // change every 4.5s

/* =========================
   HEART FLOW EFFECT
========================= */
const heartContainer = document.body; // append hearts to body

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "💖";

  // random horizontal position
  heart.style.left = Math.random() * 100 + "vw";

  // random size
  heart.style.fontSize = (12 + Math.random() * 20) + "px";

  // random animation duration
  heart.style.animationDuration = (4 + Math.random() * 6) + "s";

  heartContainer.appendChild(heart);

  // remove after animation
  setTimeout(() => heart.remove(), 10000);
}

// Create more hearts for denser effect
setInterval(createHeart, 300);

/* MUSIC AUTOPLAY */
let audio = new Audio("audio/music.mp3");
audio.loop = true;

// Try autoplay immediately
audio.play().catch(() => {
  // If blocked, wait for first user interaction
  document.body.addEventListener("click", () => {
    audio.play();
  }, { once: true });
});


/* =========================
   YES / NO BUTTON LOGIC
========================= */
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const question = document.getElementById("valentineQuestion");
const musicBtn = document.getElementById("musicBtn");
const letterBtn = document.getElementById("letterBtn");

let noClicked = false;

// Move No button randomly after first click
noBtn.addEventListener("click", () => {
  if (!noClicked) {
    noClicked = true;
    const moveInterval = setInterval(() => {
      noBtn.style.left = Math.random() * (window.innerWidth - noBtn.offsetWidth) + "px";
      noBtn.style.top = Math.random() * (window.innerHeight - noBtn.offsetHeight) + "px";
    }, 300);
  }
});

// Yes button click
yesBtn.addEventListener("click", () => {
  question.style.display = "none"; // hide question
  musicBtn.style.display = "block"; // optional: manual control
  letterBtn.style.display = "block"; // show love letter button
});


/* =========================
   LOVE LETTER POPUP
========================= */
const modal = document.getElementById("loveLetterPopup");
const closeLetter = document.getElementById("closeLetter");
const letterContent = document.getElementById("letterContent");

letterBtn.addEventListener("click", () => {
  modal.style.display = "block";
  letterContent.textContent = ""; // clear previous content

  const text = `My Dearest Love,

Every moment with you feels magical. Your smile lights up my world and your laughter warms my heart.

Will you join me for a romantic dinner tonight?

With all my love,
[Your Name]`;

  let i = 0;
  const typeWriter = setInterval(() => {
    if (i < text.length) {
      letterContent.textContent += text[i++];
    } else clearInterval(typeWriter);
  }, 30);
});

// Close modal
closeLetter.addEventListener("click", () => {
  modal.style.display = "none";
});

/* =========================
   ENSURE BUTTONS STAY CLICKABLE
========================= */
window.addEventListener("resize", () => {
  // adjust positions if needed when window resizes
});
