// Fungsi untuk menambahkan kelas 'show' pada kategori secara bertahap
window.onload = function () {
  const categories = document.querySelectorAll(".category");
  let delay = 0;

  categories.forEach((category, index) => {
    setTimeout(() => {
      category.classList.add("show"); // Menambahkan kelas 'show' untuk menampilkan elemen
    }, delay);
    delay += 500; // Penundaan agar elemen muncul satu per satu
  });
};
