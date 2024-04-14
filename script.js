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

// Disable context menu on long press
document.addEventListener('contextmenu', function(event) {
  event.preventDefault();
});
