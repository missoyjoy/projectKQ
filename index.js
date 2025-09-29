// Auto update year in footer
document.getElementById("year").textContent = new Date().getFullYear();
// Update year automatically
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu toggle
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
});
