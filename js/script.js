/* CLICK HEARTS */
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

/* FLOATING CONFETTI HEARTS */
function spawnRandomHeart() {
  const heart = document.createElement("div");
  heart.className = "continuous-heart";
  heart.textContent = "💖";

  heart.style.left = Math.random() * window.innerWidth + "px";
  const size = 15 + Math.random() * 35;
  heart.style.fontSize = size + "px";

  const colors = ["#ff4d6d", "#ff85a2", "#ffb3c6", "#ffc9d9", "#ff7f91"];
  heart.style.color = colors[Math.floor(Math.random() * colors.length)];

  const duration = 4 + Math.random() * 4;
  heart.style.animationDuration = duration + "s";

  const drift = Math.random() * 200 - 100;
  heart.style.transform = `translateX(${drift}px)`;

  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), duration * 1000);
}
setInterval(spawnRandomHeart, 300);

/* BACKGROUND MUSIC */
let audio;
let isPlaying = false;
function toggleMusic(event) {
  event.stopPropagation();
  if (!audio) {
    audio = new Audio("audio/music.mp3");
    audio.loop = true;
  }
  if (isPlaying) {
    audio.pause();
    document.getElementById("musicBtn").textContent = "🎵 Play Music";
  } else {
    audio.play();
    document.getElementById("musicBtn").textContent = "⏸ Pause Music";
  }
  isPlaying = !isPlaying;
}

/* LOVE LETTER TYPING & SPARKLES */
function typeLetterText(element, text, speed = 50) {
  element.textContent = "";
  let i = 0;
  const typingInterval = setInterval(() => {
    if (i < text.length) {
      element.textContent += text[i];
      i++;
    } else {
      clearInterval(typingInterval);
    }
  }, speed);
}

function showLetter(event) {
  event.stopPropagation();
  const letter = document.getElementById("loveLetter");
  const letterContent = document.getElementById("letterContent");

  if (!letter.classList.contains("show")) {
    letter.style.display = "block";
    setTimeout(() => letter.classList.add("show"), 50);
    document.getElementById("letterBtn").textContent = "💌 Close Love Letter";

    const loveText = `My Dearest Love,\n\nEvery moment with you feels magical. Your smile lights up my world, and your laughter is my favorite melody.\n\nI’ve poured all my heart into this little surprise for you. Will you do me the honor of joining me for a romantic dinner tonight?\n\nWith all my love,\n[Your Name]`;
    typeLetterText(letterContent, loveText, 40);

    for (let i = 0; i < 20; i++) {
      const sparkle = document.createElement("div");
      sparkle.className = "love-letter-heart";
      sparkle.textContent = "💖";

      const rect = letter.getBoundingClientRect();
      sparkle.style.left = Math.random() * rect.width + "px";
      sparkle.style.top = Math.random() * rect.height + "px";

      letter.appendChild(sparkle);
      setTimeout(() => sparkle.remove(), 3000 + Math.random() * 2000);
    }

  } else {
    letter.classList.remove("show");
    setTimeout(() => letter.style.display = "none", 800);
    document.getElementById("letterBtn").textContent = "💌 Open Your Love Letter";
  }
}
