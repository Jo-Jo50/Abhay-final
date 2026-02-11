/* FLOATING HEARTS ON CLICK */
function spawnHeart(e) {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = "💖";
  heart.style.left = e.clientX + "px";
  heart.style.top = e.clientY + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 2000);
}
document.body.addEventListener("click", spawnHeart);

/* CONTINUOUS FLOATING HEARTS */
function spawnRandomHeart() {
  const heart = document.createElement("div");
  heart.className = "continuous-heart";
  heart.textContent = "💖";
  heart.style.left = Math.random() * window.innerWidth + "px";
  const size = 15 + Math.random() * 35;
  heart.style.fontSize = size + "px";
  const colors = ["#ff4d6d","#ff85a2","#ffb3c6","#ffc9d9","#ff7f91"];
  heart.style.color = colors[Math.floor(Math.random() * colors.length)];
  heart.style.animationDuration = 4 + Math.random() * 4 + "s";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 8000);
}
setInterval(spawnRandomHeart, 300);

/* BACKGROUND MUSIC */
let audio;
let isPlaying = false;

function startMusic() {
  if (!audio) {
    audio = new Audio("audio/music.mp3"); // Make sure the file exists
    audio.loop = true;
  }
  audio.play();
  isPlaying = true;
  const musicBtn = document.getElementById("musicBtn");
  musicBtn.textContent = "⏸ Pause Music";
  musicBtn.style.display = "block"; // Show music button after Yes
}

/* BACKGROUND IMAGE SLIDER */
const bgPhotos = document.querySelectorAll(".bg-photo");
let current = 0;
setInterval(() => {
  bgPhotos[current].classList.remove("active");
  current = (current + 1) % bgPhotos.length;
  bgPhotos[current].classList.add("active");
}, 5000);

/* VALENTINE QUESTION LOGIC */
const valQuestion = document.getElementById("valentineQuestion");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const letterBtn = document.getElementById("letterBtn");

noBtn.addEventListener("click", () => {
  alert("Come on, you have to say YES! 💖");
});

yesBtn.addEventListener("click", () => {
  valQuestion.style.display = "none"; // Hide question
  startMusic(); // Auto-start music
  letterBtn.style.display = "block"; // Show love letter button
  alert("Yay! 💕 Now click the love letter button to read your surprise!");
});

/* LOVE LETTER */
const loveLetter = document.getElementById("loveLetter");
const letterContent = document.getElementById("letterContent");

function typeLetterText(element, text, speed = 50) {
  element.textContent = "";
  let i = 0;
  const interval = setInterval(() => {
    if (i < text.length) {
      element.textContent += text[i];
      i++;
    } else clearInterval(interval);
  }, speed);
}

function showLetter(e) {
  e.stopPropagation();
  if (!loveLetter.classList.contains("show")) {
    loveLetter.classList.add("show");
    const text = `My Dearest Love,\n\nEvery moment with you feels magical. Your smile lights up my world, and your laughter is my favorite melody.\n\nI’ve poured all my heart into this little surprise for you. Will you do me the honor of joining me for a romantic dinner tonight?\n\nWith all my love,\n[Your Name]`;
    typeLetterText(letterContent, text, 40);
  } else {
    loveLetter.classList.remove("show");
  }
}

/* MUSIC BUTTON TOGGLE */
const musicBtn = document.getElementById("musicBtn");
musicBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  if (isPlaying) {
    audio.pause();
    isPlaying = false;
    musicBtn.textContent = "🎵 Play Music";
  } else {
    audio.play();
    isPlaying = true;
    musicBtn.textContent = "⏸ Pause Music";
  }
});


