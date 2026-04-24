function toggleMenu() {
  let menu = document.getElementById("menu");
  menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
}
window.addEventListener("scroll", function() {
  let elements = document.querySelectorAll(".fade-in");

  elements.forEach(el => {
    let position = el.getBoundingClientRect().top;
    let screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      el.classList.add("show");
    }
  });
});
