// toggle class untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");

// ketika humberger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// klik di luar element
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});
// message button
document.addEventListener("DOMContentLoaded", function () {
  feather.replace(); // Inisialisasi Feather Icons

  document
    .getElementById("messageButton")
    .addEventListener("click", function () {
      openWhatsAppChat();
    });

  function openWhatsAppChat() {
    // Nomor WhatsApp yang akan dihubungi
    var phoneNumber = "6285221011424"; // Ganti dengan nomor WhatsApp yang diinginkan

    // URL untuk membuka aplikasi WhatsApp dan memulai obrolan
    var whatsappUrl = "https://wa.me/" + phoneNumber;

    // Buka tautan ke WhatsApp
    window.open(whatsappUrl, "_blank");
  }
});
