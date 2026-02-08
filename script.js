const photos = [
  'assets/gallery/IMG_1566.jpg',
  'assets/gallery/IMG_6319.jpg',
  'assets/gallery/P1150790.jpg',
  'assets/gallery/Screenshot 2026-02-06 at 9.51.19 PM.png',
  'assets/gallery/IMG_1566.jpg',
  'assets/gallery/IMG_6319.jpg',
  'assets/gallery/P1150790.jpg',
  'assets/gallery/Screenshot 2026-02-06 at 9.51.19 PM.png'
];

let currentIndex = 0;

// Build portfolio grid
const grid = document.getElementById('portfolio-grid');
photos.forEach(function (src, i) {
  const img = document.createElement('img');
  img.src = src;
  img.alt = 'Photo';
  img.onclick = function () { openLightbox(i); };
  grid.appendChild(img);
});

// Lightbox
function openLightbox(index) {
  currentIndex = index;
  const lightbox = document.getElementById('lightbox');
  document.getElementById('lightbox-img').src = photos[currentIndex];
  lightbox.classList.add('active');
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
}

function nextPhoto() {
  currentIndex = (currentIndex + 1) % photos.length;
  document.getElementById('lightbox-img').src = photos[currentIndex];
}

function prevPhoto() {
  currentIndex = (currentIndex - 1 + photos.length) % photos.length;
  document.getElementById('lightbox-img').src = photos[currentIndex];
}

document.addEventListener('keydown', function (e) {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox.classList.contains('active')) return;

  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') nextPhoto();
  if (e.key === 'ArrowLeft') prevPhoto();
});
