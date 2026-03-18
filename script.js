function celebrate() {
  confetti({
    particleCount: 200,
    spread: 100,
    origin: { y: 0.6 }
  });
}

function playMusic() {
  let music = document.getElementById("bgMusic");
  music.play();
}

let yourName = "Adarsh";
let friendName = "Akash Yadav";

document.getElementById("name").innerText = friendName;

document.querySelector(".message").innerText =
  `Happy Birthday ${friendName}! 🎉 From your friend ${yourName} 💖`;