const photos = [
  'assets/gallery/michael_silas_grad_compressed-4.jpg',
  'assets/gallery/michael_silas_grad_compressed-5-2.jpg',
  'assets/gallery/michael_silas_grad_compressed-1.jpg',

  'assets/gallery/michael_silas_grad_compressed-4-2.jpg',
  'assets/gallery/michael_silas_grad_compressed-5.jpg',
  'assets/gallery/michael_silas_grad_compressed-3.jpg',

  'assets/gallery/Steimel-5.jpeg',
  'assets/gallery/Steimel-4.jpg',
  'assets/gallery/Steimel-19.jpeg',
  
  'assets/gallery/Steimel-21.jpeg',
  'assets/gallery/Steimel-7.jpeg',
  'assets/gallery/Steimel-11.jpeg',

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
