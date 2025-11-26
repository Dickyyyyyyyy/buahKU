//Toggle Class Active untuk Fruit menu
const navbarNav = document.querySelector(".navbar-nav");

//Ketika Fruit menu di klik
document.querySelector("#fruit-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// Toggle class active Untuk Search Form
const searchform = document.querySelector(".search-form");
const searchbox = document.querySelector("#searchbox");

document.querySelector("#search-button").onclick = (e) => {
  searchform.classList.toggle("active");
  searchbox.focus();
  e.preventDefault();
};

// Toggle class active Untuk Shopping cart
const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick = (e) => {
  shoppingCart.classList.toggle('active');
  e.preventDefault();
};

//klik di luar element
const fruit = document.querySelector("#fruit-menu");
const sb = document.querySelector('#search-button');
const sc = document.querySelector('#shopping-cart-button');



document.addEventListener("click", function (e) {
  if (!fruit.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchform.contains(e.target)) {
    searchform.classList.remove("active");
  }

  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

//Modal Box
const itemDetailModal = document.querySelector('#item-detail-model');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach ((btn) => {
  
  btn.onclick = (e) => {
    itemDetailModal.style.display = 'flex';
    e.preventDefault();
  };

});


//Click Tombol Close
document.querySelector('.modal .close-icon').onclick = (e) => {
  itemDetailModal.style.display = 'none';
  e.preventDefault();
}

//Klik di luar modal
const modal = document.querySelector('#item-detail-model');
window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
};