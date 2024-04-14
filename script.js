const currentImage = document.getElementById('current-image');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

// Replace image paths with your actual image filenames
const images = ['image1.jpg', 'image2.jpg', 'image3.jpg', /* ... */];
let currentIndex = 0;

// Disable context menu on long press
document.addEventListener('contextmenu', (event) => event.preventDefault());

function updateImage() {
  currentImage.src = images[currentIndex];
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
});

updateImage(); // Set initial image

