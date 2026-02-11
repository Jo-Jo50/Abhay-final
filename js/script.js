/* ============================= */
/* HEART FLOWING LOGIC           */
/* ============================= */
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = "💖";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.fontSize = 12 + Math.random() * 24 + "px";
  heart.style.animationDuration = 4 + Math.random() * 4 + "s";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 8000);
}

setInterval(createHeart, 200); // spawn hearts continuously

/* ============================= */
/* YES/NO VALENTINE LOGIC        */
/* ============================= */
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const questionBox = document.getElementById("questionBox");
const letterBtn = document.getElementById("letterBtn");

noBtn.addEventListener("click", () => {
  // Move the no button to a random location
  noBtn.style.position = "absolute";
  noBtn.style.top = Math.random() * (window.innerHeight - 50) + "px";
  noBtn.style.left = Math.random() * (window.innerWidth - 100) + "px";
});

yesBtn.addEventListener("click", () => {
  questionBox.style.display = "none";
  letterBtn.style.display = "block";
});

/* ============================= */
/* MUSIC PLAY LOGIC              */
/* ============================= */
const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

musicBtn.addEventListener("click", () => {
  bgMusic.play();
});

/* ============================= */
/* LOVE LETTER POPUP             */
/* ============================= */
const modal = document.getElementById("loveLetterPopup");
const closeBtn = document.getElementById("closeLetter");
const letterContent = document.getElementById("letterContent");

letterBtn.addEventListener("click", () => {
  modal.style.display = "block";
  letterContent.textContent = "";

  const text = `My Dearest Love,

Every moment with you feels magical. Your smile lights up my world and your laughter is my favorite melody.

You make every day brighter and my heart happier.

Will you join me for a romantic dinner tonight?

With all my love,
[Your Name]`;

  let i = 0;
  const type = setInterval(() => {
    if (i < text.length) letterContent.textContent += text[i++];
    else clearInterval(type);
  }, 35);
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
