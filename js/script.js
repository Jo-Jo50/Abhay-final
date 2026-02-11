// ====== GLOBAL VARIABLES ======
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const letterBtn = document.getElementById("letterBtn");
const musicBtn = document.getElementById("musicBtn");
const loveLetter = document.getElementById("loveLetter");
const letterContent = document.getElementById("letterContent");

let audio;
let noClicked = false;

// ====== FLOATING HEARTS ON CLICK ======
document.body.addEventListener("click", (e) => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = "💖";
  heart.style.left = e.pageX + "px";
  heart.style.top = e.pageY + "px";
  document.body.appendChild(heart);

  let topPos = e.pageY;
  const floatInterval = setInterval(() => {
    topPos -= 2;
    heart.style.top = topPos + "px";
  }, 20);

  setTimeout(() => {
    clearInterval(floatInterval);
    heart.remove();
  }, 2000);
});

// ====== YES BUTTON ======
yesBtn.addEventListener("click", () => {
  alert("Yay! 💕 Click the Love Letter button next!");
  letterBtn.style.display = "inline-block";
  musicBtn.style.display = "inline-block";
});

// ====== NO BUTTON (FLOATING + HEARTS) ======
noBtn.addEventListener("click", () => {
  if (!noClicked) {
    noClicked = true;
    alert("Haha! You can’t click No again! 💖");
    noBtn.style.position = "absolute";

    function moveNoButton() {
      const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
      const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
      noBtn.style.left = x + "px";
      noBtn.style.top = y + "px";

      // Heart trail from No button
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.textContent = "💖";
      heart.style.left = x + noBtn.offsetWidth / 2 + "px";
      heart.style.top = y + noBtn.offsetHeight / 2 + "px";
      heart.style.fontSize = 12 + Math.random() * 15 + "px";
      heart.style.color = "#ff4d6d";
      heart.style.position = "absolute";
      document.body.appendChild(heart);

      let topPos = y + noBtn.offsetHeight / 2;
      const floatInterval = setInterval(() => {
        topPos -= 2;
        heart.style.top = topPos + "px";
      }, 20);

      setTimeout(() => {
        clearInterval(floatInterval);
        heart.remove();
      }, 2000);
    }

    const interval = setInterval(moveNoButton, 500);

    // Stop floating when Yes clicked
    yesBtn.addEventListener("click", () => clearInterval(interval));
  }
});

// ====== LOVE LETTER BUTTON ======
letterBtn.addEventListener("click", () => {
  loveLetter.style.display = "block";
  const letterText = `
Dear My Love 💌,

You are the most amazing person in my life. Every moment with you is a treasure,
and I can't wait to make more memories together. Your smile lights up my world,
and your laughter is music to my heart.

So, will you join me for a romantic dinner soon? 🍽️💖

With all my love,
Your Valentine
`;
  letterContent.textContent = ""; // clear first

  let i = 0;
  const typing = setInterval(() => {
    if (i < letterText.length) {
      letterContent.textContent += letterText[i];
      i++;
    } else {
      clearInterval(typing);
    }
  }, 30);
});

// ====== MUSIC BUTTON ======
musicBtn.addEventListener("click", () => {
  if (!audio) {
    audio = new Audio("audio/music.mp3"); // Make sure file exists
    audio.loop = true;
  }
  audio.play();
});
