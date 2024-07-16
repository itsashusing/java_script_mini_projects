const mode = document.querySelector("#mode");

if (localStorage.getItem("mode")) {
  document.body.classList.toggle(localStorage.getItem("mode"));
  mode.setAttribute("checked", true);
}
mode.addEventListener("change", () => {
  if (localStorage.getItem("mode") === "dark") {
    document.body.classList.remove("dark");
    localStorage.clear();
  } else {
    localStorage.setItem("mode", "dark");
    document.body.classList.add("dark");
  }
});
