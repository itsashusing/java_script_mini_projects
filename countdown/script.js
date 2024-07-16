let count = document.querySelector("#count");
const restart = document.querySelector("#restart");

// let counter = parseInt(count.innerText);
let counter = 5;
setInterval(() => {
  if (counter > 0) {
    counter--;
    count.innerText = counter;
  }
}, 1000);

restart.addEventListener("click", () => {
  counter = 6;
});
