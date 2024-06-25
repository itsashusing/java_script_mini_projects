const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const reset = document.querySelector("#reset");
const display = document.querySelector(".display");
const input = document.querySelector("#input");

// i = input.value;
plus.addEventListener("click", () => {
  display.innerText = +display.innerText + +input.value;
});
minus.addEventListener("click", () => {
  display.innerText = +display.innerText - +input.value;
});

reset.addEventListener("click", () => {
  display.innerText = "0";
});
