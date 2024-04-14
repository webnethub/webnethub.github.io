.image-picker {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
}

.image-picker input[type="file"] {
  display: none;
}

.image-picker label {
  padding: 10px 20px;
  border: 1px solid #ddd;
  cursor: pointer;
}

#uploaded-image {
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin-top: 10px;
}
