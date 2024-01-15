// toggle class untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");

// ketika humberger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar element
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
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
