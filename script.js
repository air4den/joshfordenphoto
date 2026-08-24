const photos = [
  'assets/gallery/willbusch-10.jpg',
  'assets/gallery/skyler-36.jpg',
  'assets/gallery/tina-9.jpg',

  'assets/gallery/tina-22.jpg',
  'assets/gallery/willbusch-13.jpg',
  'assets/gallery/michael_silas_grad_compressed-4.jpg',
  
  'assets/gallery/skyler-23.jpg',
  'assets/gallery/willbusch-16.jpg',
  'assets/gallery/skyler-12.jpg',

  'assets/gallery/tina-18.jpg',
  'assets/gallery/michael_silas_grad_compressed-1.jpg',
  'assets/gallery/skyler-9.jpg',

  'assets/gallery/michael_silas_grad_compressed-5-2.jpg',
  'assets/gallery/michael_silas_grad-12.jpeg',
  'assets/gallery/michael_silas_grad-16.jpeg',

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
