//Toggle Class Active
const navbarNav = document.querySelector(".navbar-nav");

//Ketika Fruit menu di klik
document.querySelector("#fruit-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik di luar sidebar untuk menghilangkan nav
const fruit = document.querySelector("#fruit-menu");

document.addEventListener("click", function (e) {
  if (!fruit.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
