const currentImage = document.getElementById('current-image');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

let imageIndex = 0; // Keep track of current image index
const images = [ // Replace with your image file names
  "image1.jpg",
  "image2.jpg",
  "image3.jpg",
  // ...
];

// Disable context menu on long press
document.addEventListener('contextmenu', (event) => event.preventDefault());

function changeImage(direction) {
  imageIndex += direction;

  // Handle image loop at beginning and end
  if (imageIndex < 0) {
    imageIndex = images.length - 1;
  } else if (imageIndex >= images.length) {
    imageIndex = 0;
  }

  currentImage.src = images[imageIndex];
}

prevButton.addEventListener('click', () => changeImage(-1));
nextButton.addEventListener('click', () => changeImage(1));


/*const currentImage = document.getElementById('current-image');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

// Replace image paths with your actual image filenames
const images = ['image1.jpg', 'image2.jpg', 'image3.jpg', /* ... *//*];
/*let currentIndex = 0;

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
*/
