function celebrate() {
  confetti({
    particleCount: 200,
    spread: 100,
    origin: { y: 0.6 }
  });
}

let yourName = "Adarsh";
let friendName = "Akash Yadav";

document.getElementById("name").innerText = friendName;

document.querySelector(".message").innerText =
  `Happy Birthday ${friendName}! 🎉 From your friend ${yourName} 💖`;

setTimeout(() => {
  celebrate();
}, 1000);