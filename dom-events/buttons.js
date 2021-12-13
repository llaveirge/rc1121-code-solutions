// Click Event
function handleClick(event) {
  console.log('button clicked');
  console.log('event value:', event);
  console.log('event.target value:', event.target);
}

var $clickedButton = document.querySelector('.click-button');

$clickedButton.addEventListener('click', handleClick);

// Mouseover Event
function handleMouseover(event) {
  console.log('button hovered');
  console.log('event value:', event);
  console.log('event.target value:', event.target);
}

var $hoverButton = document.querySelector('.hover-button');

$hoverButton.addEventListener('mouseover', handleMouseover);

// Double-click Event
function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event value:', event);
  console.log('event.target value:', event.target);
}

var $doubleClicked = document.querySelector('.double-click-button');

$doubleClicked.addEventListener('dblclick', handleDoubleClick);
