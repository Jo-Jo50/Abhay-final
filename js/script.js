// ====== BACKGROUND IMAGE SLIDER ======
const bgPhotos = document.querySelectorAll(".bg-photo");
let current = 0;
setInterval(() => {
  bgPhotos[current].classList.remove("active");
  current = (current + 1) % bgPhotos.length;
  bgPhotos[current].classList.add("active");
}, 4500);

// ====== HEART FLOW (FIXED) ======
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = "💖";

  // random horizontal position
  heart.style.left = Math.random() * window.innerWidth + "px";

  // START AT BOTTOM
  heart.style.top = window.innerHeight + "px";

  // random size
  heart.style.fontSize = 12 + Math.random() * 28 + "px";

  // random speed
  heart.style.animationDuration = 4 + Math.random() * 4 + "s";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 8000);
}

// spawn many hearts
setInterval(createHeart, 150);


// ====== VALENTINE YES/NO ======
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const questionBox = document.getElementById("valentineQuestion");
const musicBtn = document.getElementById("musicBtn");
const letterBtn = document.getElementById("letterBtn");

// stop No button after first click with floating
let noClicked = false;
noBtn.addEventListener("click", () => {
  if (!noClicked) {
    noClicked = true;
    alert("Come on… say YES! 💖");
    noBtn.style.position = "absolute";

    let moveInterval = setInterval(() => {
      noBtn.style.left = Math.random() * (window.innerWidth - noBtn.offsetWidth) + "px";
      noBtn.style.top = Math.random() * (window.innerHeight - noBtn.offsetHeight) + "px";
    }, 300);

    yesBtn.addEventListener("click", () => clearInterval(moveInterval));
  }
});

// ====== YES CLICK ======
yesBtn.addEventListener("click", () => {
  questionBox.style.display = "none";
  musicBtn.style.display = "block";
  letterBtn.style.display = "block";
});

// ====== MUSIC BUTTON ======
const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

musicBtn.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play();
    musicBtn.textContent = "⏸ Pause Music";
  } else {
    bgMusic.pause();
    musicBtn.textContent = "🎵 Play Music";
  }
});


// ====== LOVE LETTER POPUP ======
const loveLetterPopup = document.getElementById("loveLetterPopup");
const closeLetter = document.getElementById("closeLetter");
const letterContent = document.getElementById("letterContent");

letterBtn.addEventListener("click", () => {
  loveLetterPopup.style.display = "block";
  letterContent.textContent = ""; // clear

  const text = `My Dearest Love,

Every moment with you feels magical. Your smile lights up my world and your laughter is my favorite melody.

Will you join me for a romantic dinner tonight?

With all my love,
[Your Name]`;

  let i = 0;
  const typeInterval = setInterval(() => {
    if (i < text.length) letterContent.textContent += text[i++];
    else clearInterval(typeInterval);
  }, 35);
});

closeLetter.addEventListener("click", () => {
  loveLetterPopup.style.display = "none";
});
