const imageUpload = document.getElementById('image-upload');
const uploadedImage = document.getElementById('uploaded-image');

imageUpload.addEventListener('change', function(event) {
  if (event.target.files && event.target.files[0]) {
    const reader = new FileReader();

    reader.onload = function(e) {
      uploadedImage.src = e.target.result;
    };

    reader.readAsDataURL(event.target.files[0]);
  }
});

// Disable right-click on the image
uploadedImage.addEventListener('contextmenu', function(event) {
  event.preventDefault();
});
