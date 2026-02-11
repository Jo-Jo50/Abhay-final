/* BACKGROUND IMAGE SLIDER */
const bgPhotos = document.querySelectorAll(".bg-photo");
let currentBG = 0;
setInterval(() => {
  bgPhotos[currentBG].classList.remove("active");
  currentBG = (currentBG + 1) % bgPhotos.length;
  bgPhotos[currentBG].classList.add("active");
}, 4000);

/* HEART ON CLICK */
document.body.addEventListener("click", function (e) {
  const h = document.createElement("div");
  h.className = "heart";
  h.textContent = "💖";
  h.style.left = e.clientX + "px";
  h.style.top = e.clientY + "px";
  document.body.appendChild(h);
  setTimeout(() => h.remove(), 2000);
});

/* YES/NO LOGIC */
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const valQ = document.getElementById("valentineQuestion");
const musicBtn = document.getElementById("musicBtn");
const letterBtn = document.getElementById("letterBtn");
let audio = new Audio("audio/music.mp3");
audio.loop = true;

/* NO BUTTON FLOAT + HEART TRAIL */
let noClicked = false;
noBtn.addEventListener("click", () => {
  if (!noClicked) {
    noClicked = true;
    alert("Come on… say YES 💖!");
    noBtn.style.position = "absolute";
    let interval = setInterval(() => {
      noBtn.style.left = Math.random() * (window.innerWidth - noBtn.offsetWidth) + "px";
      noBtn.style.top = Math.random() * (window.innerHeight - noBtn.offsetHeight) + "px";
      const trail = document.createElement("div");
      trail.className = "heart";
      trail.textContent = "💖";
      trail.style.left = noBtn.style.left;
      trail.style.top = noBtn.style.top;
      document.body.appendChild(trail);
      setTimeout(() => trail.remove(), 2000);
    }, 400);
    yesBtn.addEventListener("click", () => clearInterval(interval));
  }
});

/* YES BUTTON */
yesBtn.addEventListener("click", () => {
  valQ.style.display = "none";
  musicBtn.style.display = "block";
  letterBtn.style.display = "block";
  audio.play().catch(() => {
    console.log("Browser blocked autoplay, click the music button.");
  });
});

/* MUSIC BUTTON */
musicBtn.addEventListener("click", () => {
  if (!audio.paused) {
    audio.pause();
    musicBtn.textContent = "🎵 Play Music";
  } else {
    audio.play();
    musicBtn.textContent = "⏸ Pause Music";
  }
});

/* LOVE LETTER POPUP */
const loveLetterPopup = document.getElementById("loveLetterPopup");
const closeLetter = document.getElementById("closeLetter");
const letterContent = document.getElementById("letterContent");

letterBtn.addEventListener("click", () => {
  loveLetterPopup.style.display = "block";
  letterContent.textContent = "";
  const text = `My Dearest Love,\n\nEvery moment with you feels magical. Your smile lights up my world and your laughter is my favorite melody...\n\nWill you join me for a romantic dinner tonight?\n\nWith all my love,\n[Your Name]`;
  let i = 0;
  const type = setInterval(() => {
    if (i < text.length) letterContent.textContent += text[i++];
    else clearInterval(type);
  }, 35);
});

closeLetter.addEventListener("click", () => {
  loveLetterPopup.style.display = "none";
});
