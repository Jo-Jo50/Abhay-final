/* === Floating hearts on click === */
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

/* === Continuous floating hearts === */
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

/* === Background Image Slider === */
const bgPhotos = document.querySelectorAll(".bg-photo");
let current = 0;
setInterval(() => {
  bgPhotos[current].classList.remove("active");
  current = (current + 1) % bgPhotos.length;
  bgPhotos[current].classList.add("active");
}, 5000);

/* === Music Logic === */
let audio;
let isPlaying = false;

function startMusic() {
  if (!audio) {
    audio = new Audio("audio/music.mp3"); // your music file
    audio.loop = true;
  }
  audio.play().then(() => {
    isPlaying = true;
    console.log("Music started 🎵");
  }).catch(err => {
    console.log("Music autoplay blocked by browser, try clicking anywhere.");
  });
}

/* === Valentine Question Logic === */
const valQuestion = document.getElementById("valentineQuestion");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const letterBtn = document.getElementById("letterBtn");
const loveLetter = document.getElementById("loveLetter");
const letterContent = document.getElementById("letterContent");

// Hide letter button initially
letterBtn.style.display = "none";

noBtn.addEventListener("click", () => {
  alert("Come on, you have to say YES! 💖");
});

yesBtn.addEventListener("click", () => {
  valQuestion.style.display = "none";

  // Autoplay music immediately
  startMusic();

  // Show love letter button
  letterBtn.style.display = "block";
  letterBtn.classList.add("fade-in");

  alert("Yay! 💕 Now click the love letter button to read your surprise!");
});

/* === Love Letter Button Logic === */
letterBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  if (!loveLetter.style.display || loveLetter.style.display === "none") {
    loveLetter.style.display = "block";
    loveLetter.classList.add("fade-in");

    letterContent.textContent = "";

    const text = `My Dearest Love,\n\nEvery moment with you feels magical. Your smile lights up my world, and your laughter is my favorite melody.\n\nI’ve poured all my heart into this little surprise for you. Will you do me the honor of joining me for a romantic dinner tonight?\n\nWith all my love,\n[Your Name]`;

    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        letterContent.textContent += text[i];
        i++;
      } else clearInterval(interval);
    }, 40);
  } else {
    loveLetter.style.display = "none";
  }
});
