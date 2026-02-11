/* ============================= */
/* HEART FLOWING LOGIC           */
/* ============================= */
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = "💖";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.fontSize = 12 + Math.random() * 24 + "px";
  heart.style.animationDuration = 4 + Math.random() * 4 + "s"; // random speed
  document.body.appendChild(heart);

  // remove heart after animation
  setTimeout(() => heart.remove(), 8000);
}

// continuously spawn hearts
setInterval(createHeart, 200); // new heart every 200ms
/* ============================= */
/* LOVE LETTER POPUP             */
/* ============================= */
const letterBtn = document.getElementById("letterBtn");
const modal = document.getElementById("loveLetterPopup");
const closeBtn = document.getElementById("closeLetter");
const letterContent = document.getElementById("letterContent");

letterBtn.addEventListener("click", () => {
  modal.style.display = "block";
  letterContent.textContent = ""; // clear before typing

  const text = `My Dearest Love,

Every moment with you feels magical. Your smile lights up my world and your laughter is my favorite melody.

You make every day brighter and my heart happier.

Will you join me for a romantic dinner tonight?

With all my love,
[Your Name]`;

  // typewriting effect
  let i = 0;
  const type = setInterval(() => {
    if (i < text.length) letterContent.textContent += text[i++];
    else clearInterval(type);
  }, 35);
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
