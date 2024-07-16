var timer = 5;
var score = 0;
document.querySelector("#timer").textContent = timer;

function makeBubble() {
  var clutter = "";
  for (var i = 1; i <= 152; i++) {
    clutter += `  <div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
  }
  document.querySelector(".content").innerHTML = clutter;
}
function runtimer() {
  var timerend = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timer").textContent = timer;
    } else {
      document.querySelector(
        "#pbtm"
      ).innerHTML = ` <H1>Game Over <a href="">Restart</a></H1>   
      <h3> 
      Your score is:
      ${score}     
      </h3>
      `;
      clearInterval(timerend);
    }
  }, 1000);
}

function getNewHit() {
  document.querySelector("#hit").innerText = Math.floor(Math.random() * 10);
}

function increaseScore() {
  score += 10;

  document.querySelector("#score").innerText = score;
}

runtimer();
makeBubble();
getNewHit();

document.querySelector(".content").addEventListener("click", (e) => {
  var bubbleValue = parseInt(e.target.innerText);
  var hit = parseInt(document.querySelector("#hit").innerText);
  if (bubbleValue === hit) {
    increaseScore();
    getNewHit();
  }
});
