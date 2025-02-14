function showLove() {
  const container = document.getElementById("heartContainer");
  const emojis = ["❤️", "💋"]; // Tambahkan emoji love dan kiss

  for (let i = 0; i < 30; i++) {
    // Membuat banyak emotikon
    const loveEmoji = document.createElement("div");
    loveEmoji.className = "love-emoji";
    loveEmoji.innerText = emojis[Math.floor(Math.random() * emojis.length)]; // Pilih emoji secara acak

    // Posisi acak
    loveEmoji.style.left = Math.random() * 100 + "vw";
    loveEmoji.style.top = Math.random() * 20 + 80 + "vh";

    // Ukuran acak
    let size = Math.random() * 20 + 20;
    loveEmoji.style.fontSize = size + "px";

    // Waktu delay acak agar tidak muncul bersamaan
    loveEmoji.style.animationDelay = Math.random() * 2 + "s";

    container.appendChild(loveEmoji);

    // Hapus setelah animasi selesai
    setTimeout(() => {
      loveEmoji.remove();
    }, 3000);
  }
}

let currentPhotoIndex = 0;
const images = [
  "1736520822708.jpg",
  "1736520823791.jpg",
  "IMG_20240804_170243.jpg",
  "IMG_20241003_163745.jpg",
  "IMG_20241019_154321.jpg",
  "IMG_20241107_105449.jpg",
  "IMG_20250103_153243.jpg",
  "IMG_20250105_151208.jpg",
  "PhotoCapture_2024_1003_164226_577.jpeg",
  "IMG_20241202_115125.jpg",
  "IMG_20241229_135116.jpg",
];

function showGallery() {
  currentPhotoIndex = 0;
  document.getElementById("photoModal").style.display = "flex";
  document.getElementById("photoDisplay").src = images[currentPhotoIndex];
}

function nextPhoto() {
  currentPhotoIndex++;
  if (currentPhotoIndex >= images.length) {
    closeGallery();
    return;
  }

  let photoElement = document.getElementById("photoDisplay");

  // Efek fade out
  photoElement.style.opacity = 0;

  setTimeout(() => {
    photoElement.src = images[currentPhotoIndex];
    photoElement.style.opacity = 1; // Efek fade in
  }, 500); // Tunggu 500ms agar fade out selesai sebelum mengganti foto
}

function closeGallery() {
  document.getElementById("photoModal").style.display = "none";
}

function closeGallery() {
  document.getElementById("photoModal").style.display = "none";
}

