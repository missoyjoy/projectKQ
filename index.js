// Auto update year in footer
document.getElementById("year").textContent = new Date().getFullYear();



const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
});
