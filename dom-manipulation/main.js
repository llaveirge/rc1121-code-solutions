var numOfClicks = 0;

var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

function clickIncrement(event) {
  numOfClicks++;
  $clickCount.textContent = 'Clicks: ' + numOfClicks;

  if (numOfClicks < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (numOfClicks >= 4 && numOfClicks < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (numOfClicks >= 7 && numOfClicks < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (numOfClicks >= 10 && numOfClicks < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (numOfClicks >= 13 && numOfClicks < 16) {
    $hotButton.className = 'hot-button hot';
  } else {
    $hotButton.className = 'hot-button nuclear';
  }
}

$hotButton.addEventListener('click', clickIncrement);
