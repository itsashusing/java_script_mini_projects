const humbermenu = document.querySelector(".hamburger-menu-container");
const navbar = document.querySelector("nav");
const close = document.querySelector(".close");
console.log(humbermenu);
humbermenu.addEventListener("click", () => {
  // humbermenu.style.display= 'none'
  navbar.parentElement.classList.add("side-menu");
});
close.addEventListener("click", () => {
  navbar.parentElement.classList.remove("side-menu");
  // humbermenu.style.display= 'block'
});
