const nav = document.querySelector(".nav"),
  menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("show-nav");
  menuBtn.classList.toggle("rotate");
});
