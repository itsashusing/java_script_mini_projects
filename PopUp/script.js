const button = document.querySelector("button");
const popup = document.querySelector(".popup");
const close = document.querySelector(".close");
button.addEventListener("click", () => {
  popup.classList.toggle("open");
});

close.addEventListener("click", () => {
  popup.classList.toggle("open");
});
