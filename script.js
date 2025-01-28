// Create the custom cursor element
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

// Move the cursor on mouse move
document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  // Set the cursor's position to follow the mouse
  cursor.style.left = `${mouseX}px`;
  cursor.style.top = `${mouseY}px`;
});


// ------------------ Image cycling for .render_trees ------------------

// Only proceed if the page has .render_trees elements
const renderTreesImages = document.querySelectorAll('.render_trees');
if (renderTreesImages.length > 0) {
  // Create an array of image sources for .render_trees
  const renderTreesImageSources = [
    'render_trees.png',
    '3.png',
    'W22_BA1_Tschimmel_picture_model.jpg', 
    'IMG_2991.jpeg'// Add more images as needed
  ];

  renderTreesImages.forEach(image => {
    image.addEventListener('click', () => {
      // Find the current image's index in the imageSources array
      let currentIndex = renderTreesImageSources.indexOf(image.src.split('/').pop()); // Extract the image name

      // Move to the next image in the array, wrapping around if needed
      let nextIndex = (currentIndex + 1) % renderTreesImageSources.length;

      // Update the image source to the next image in the array
      image.src = renderTreesImageSources[nextIndex];
    });
  });
}

// ------------------ Image cycling for .section ------------------

// Only proceed if the page has .section elements
const sectionImages = document.querySelectorAll('.Section');
if (sectionImages.length > 0) {
  // Create an array of image sources for .section
  const sectionImageSources = [
    'S23_BArch2_ADP_TheCanyon_section_1.jpg',
    'S23_BArch2_ADP_TheCanyon_section_2.jpg',
    'S23_BArch2_ADP_TheCanyon_section_3.jpg' // Add more images as needed
  ];

  sectionImages.forEach(image => {
    image.addEventListener('click', () => {
      // Find the current image's index in the imageSources array
      let currentIndex = sectionImageSources.indexOf(image.src.split('/').pop()); // Extract the image name

      // Move to the next image in the array, wrapping around if needed
      let nextIndex = (currentIndex + 1) % sectionImageSources.length;

      // Update the image source to the next image in the array
      image.src = sectionImageSources[nextIndex];
    });
  });
}

// ------------------ Image cycling for .model ------------------
const modelImages = document.querySelectorAll('.model');
if (modelImages.length > 0) {
  // Create an array of image sources for .model
  const modelImageSources = [
    'Model_bild.JPG',
    'DSC04376 Kopie.JPEG',
    'DSC04380 Kopie.JPEG' // Add more images as needed
  ];

  modelImages.forEach(image => {
    image.addEventListener('click', () => {
      // Find the current image's index in the imageSources array
      let currentIndex = modelImageSources.indexOf(image.src.split('/').pop()); // Extract the image name

      // Move to the next image in the array, wrapping around if needed
      let nextIndex = (currentIndex + 1) % modelImageSources.length;

      // Update the image source to the next image in the array
      image.src = modelImageSources[nextIndex];
    });
  });
}

// ------------------ Image cycling for .render_hut ------------------
const renderHutImages = document.querySelectorAll('.render_hut');
if (renderHutImages.length > 0) {
  // Create an array of image sources for .render_hut
  const renderHutImageSources = [
    'perspective_low_3.png',
    'perspective_high_forest_2_35mm.png',
    'perspective_stairs_1_35mm.png',
   'perspective_low_forest_3_16mm.png' // Add more images as needed
  ];

  renderHutImages.forEach(image => {
    image.addEventListener('click', () => {
      // Find the current image's index in the imageSources array
      let currentIndex = renderHutImageSources.indexOf(image.src.split('/').pop()); // Extract the image name

      // Move to the next image in the array, wrapping around if needed
      let nextIndex = (currentIndex + 1) % renderHutImageSources.length;

      // Update the image source to the next image in the array
      image.src = renderHutImageSources[nextIndex];
    });
  });
}

const toggleButton = document.getElementById('toggle-theme');
toggleButton.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});