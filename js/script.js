/* ==========================================================================
   SINERSIA - script.js
   JavaScript sederhana (vanilla JS) untuk seluruh halaman.
   --------------------------------------------------------------------------
   Isi file ini:
   1. Menampilkan tahun otomatis di footer
   2. Efek bayangan pada header saat halaman di-scroll
   3. Menu mobile (hamburger) buka/tutup
   4. Validasi formulir kontak (tanpa server)
   ========================================================================== */

// Jalankan kode setelah seluruh HTML selesai dimuat
document.addEventListener("DOMContentLoaded", function () {

  /* ---------- 1. Tahun otomatis di footer ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ---------- 2. Efek header saat di-scroll ---------- */
  var header = document.getElementById("siteHeader");
  if (header) {
    var onScroll = function () {
      if (window.scrollY > 10) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };
    onScroll(); // jalankan sekali saat pertama dimuat
    window.addEventListener("scroll", onScroll);
  }

  /* ---------- 3. Menu mobile (hamburger) ---------- */
  var navToggle = document.getElementById("navToggle");
  var primaryNav = document.getElementById("primaryNav");

  if (navToggle && primaryNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = primaryNav.classList.toggle("open");
      navToggle.classList.toggle("active", isOpen);
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Tutup menu setelah salah satu tautan diklik (khusus mobile)
    primaryNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        primaryNav.classList.remove("open");
        navToggle.classList.remove("active");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- 4. Validasi formulir kontak ---------- */
  var form = document.getElementById("contactForm");
  if (form) {
    var status = document.getElementById("formStatus");

    // Fungsi kecil untuk menampilkan pesan error di bawah input
    function showError(fieldName, message) {
      var field = form.querySelector("[name='" + fieldName + "']");
      var errorEl = form.querySelector("[data-error-for='" + fieldName + "']");
      if (field) field.classList.add("invalid");
      if (errorEl) errorEl.textContent = message;
    }

    function clearError(fieldName) {
      var field = form.querySelector("[name='" + fieldName + "']");
      var errorEl = form.querySelector("[data-error-for='" + fieldName + "']");
      if (field) field.classList.remove("invalid");
      if (errorEl) errorEl.textContent = "";
    }

    // Hapus error ketika pengguna mulai mengetik lagi
    form.querySelectorAll("input, textarea").forEach(function (el) {
      el.addEventListener("input", function () {
        clearError(el.name);
        if (status) status.textContent = "";
      });
    });

    form.addEventListener("submit", function (event) {
      event.preventDefault(); // hentikan pengiriman default (belum ada server)

      var nama = form.nama.value.trim();
      var email = form.email.value.trim();
      var pesan = form.pesan.value.trim();
      var valid = true;

      // Validasi sederhana
      if (nama.length < 2) {
        showError("nama", "Mohon isi nama minimal 2 karakter.");
        valid = false;
      } else {
        clearError("nama");
      }

      // Pola dasar untuk memeriksa format email
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        showError("email", "Mohon isi alamat email yang valid.");
        valid = false;
      } else {
        clearError("email");
      }

      if (pesan.length < 5) {
        showError("pesan", "Mohon tuliskan pesan minimal 5 karakter.");
        valid = false;
      } else {
        clearError("pesan");
      }

      if (!valid) {
        if (status) {
          status.textContent = "Periksa kembali data yang belum lengkap.";
          status.className = "form-status error";
        }
        return;
      }

      /* -----------------------------------------------------------------
         CATATAN PENTING:
         Website ini belum memiliki server/database. Karena itu, formulir
         hanya menampilkan pesan sukses. Agar pesan benar-benar terkirim,
         Anda bisa (nanti) memakai layanan pihak ketiga seperti Formspree,
         Google Forms, atau backend sendiri.
         ----------------------------------------------------------------- */

      if (status) {
        status.textContent =
          "Terima kasih, " + nama + "! Pesan Anda telah divalidasi. " +
          "Kami akan menghubungi Anda melalui email.";
        status.className = "form-status success";
      }

      form.reset(); // kosongkan formulir setelah sukses
    });
  }
});
