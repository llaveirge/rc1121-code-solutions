var $currentImage = document.getElementById('image');
var $icons = document.getElementsByClassName('img-button');
var $iconContainer = document.getElementById('icon-container');
var $previousButton = document.getElementById('previous');
var $nextButton = document.getElementById('next');

var imgArray = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];
var index = 0;

var carouselId = null;

function carousel() {
  // increment index:
  index++;
  // when incremented index reaches the end of the image array, restart:
  if (index > imgArray.length - 1) {
    index = 0;
  }
  // change the image:
  $currentImage.src = imgArray[index];

  // set the correct icon for each image:
  $icons[index].classList.remove('far');
  $icons[index].classList.add('fas');

  for (var curIcon of $icons) {
    if (curIcon !== $icons[index]) {
      curIcon.classList.remove('fas');
      curIcon.classList.add('far');
    }
  }

}

carouselId = setInterval(carousel, 3000);

// listen for a click on back-arrow and go to previous image:
function previousImg(event) {
  // stop carousel:
  clearInterval(carouselId);
  if (index >= 0) {
    index -= 1;
  }
  // If image is at index 0, go to the last image in the image array:
  if (index < 0) {
    index = imgArray.length - 1;
  }

  $currentImage.src = imgArray[index];

  // set the correct icon for each image:
  $icons[index].classList.add('fas');
  $icons[index].classList.remove('far');

  for (var icon of $icons) {
    if (icon !== $icons[index]) {
      icon.classList.remove('fas');
      icon.classList.add('far');
    }
  }
  // restart carousel:
  carouselId = setInterval(carousel, 3000);
}

$previousButton.addEventListener('click', previousImg);

// listen for a click on forward-arrow and go to next image:
function nextImg(event) {
  // stop carousel:
  clearInterval(carouselId);
  if (index <= imgArray.length - 1) {
    index += 1;
  }
  // If image is at last image in the array, go to index 0:
  if (index > imgArray.length - 1) {
    index = 0;
  }

  $currentImage.src = imgArray[index];

  // set the correct icon for each image:
  $icons[index].classList.add('fas');
  $icons[index].classList.remove('far');

  for (var icon of $icons) {
    if (icon !== $icons[index]) {
      icon.classList.remove('fas');
      icon.classList.add('far');
    }
  }
  // restart carousel:
  carouselId = setInterval(carousel, 3000);
}

$nextButton.addEventListener('click', nextImg);

// listen for clicks on icons and navigate to associated image:
function navigateImgs(event) {
  // stop carousel:
  clearInterval(carouselId);

  // make sure user clicks on icon:
  if (event.target.tagName !== 'I') {
    return;
  }

  // identify the navigation icon that was clicked:
  var $navButton = event.target.closest('.img-button');

  // set reset the image array index to the index of the clicked navigation icon:
  index = +$navButton.id;

  $currentImage.src = imgArray[index];

  // set the correct icon for each image:
  $icons[index].classList.add('fas');
  $icons[index].classList.remove('far');

  for (var icon of $icons) {
    if (icon !== $icons[index]) {
      icon.classList.remove('fas');
      icon.classList.add('far');
    }
  }
  // restart carousel:
  carouselId = setInterval(carousel, 3000);
}

$iconContainer.addEventListener('click', navigateImgs);
