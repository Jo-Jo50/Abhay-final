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
  letterContent.innerHTML = ""; // clear first

  const text = `My Dearest Annie, My Love, My Beautiful Queen,
  
            I just wanted to take a minute to tell you how much I love you. You are basically my favorite human, my partner-in-crime, my heart. And I just wanted to make sure you knew that—loudly and clearly.

            I keep catching myself smiling for no reason, and then I realize it is because I am thinking about you. Somehow, you have this magical ability to make life feel lighter, funnier, and more like something I actually want to show up for every day. I love how you make ordinary things - like grocery shopping or walking to the car - feel like little adventures. And I love how you make me want to be a better person.

            I love the way your mind works, your stubbornness, your kindness, and even your overthought scenarios. Honestly, I do not know how you do it, but somehow you have made me a better, happier, more ridiculous version of myself.

            I am completely, unashamedly, and ridiculously in love with you. I love you for all the big, beautiful things about you, but also for all the little weird things that make you you. I love that I can be totally myself around you, which is terrifying and amazing all at once. And I promise to keep loving you, annoying you, making you laugh, and occasionally being dramatic about random stuff for as long as you will let me.

            I promise to always be there for you, to support you, to make you laugh when life gets tough, to love you with everything I have and to make you wet, horny and scream my name.  I promise to love you more than Leanne. Thank you for all the boobie privileges. I also promise to give you peace during your downloading sessions. One day, I hope that I can hear the dreadful farts you keep on mentioning. You are my heart, my happiness, my everything.

            Forever yours (and still probably thinking about you),

            Dumb, Dumb, Dumb`;

   let i = 0;
   const typeWriter = setInterval(() => {
     if (i < text.length) {
       // Convert actual newline characters (\n) to <br> dynamically
       if (text[i] === "\n") {
         letterContent.innerHTML += "<br>";
       } else {
         letterContent.innerHTML += text[i];
       }
       i++;
     } else clearInterval(typeWriter);
   }, 50); // slower speed, adjust as you like
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
