var $countdownDisplay = document.querySelector('.countdown-display');

var intervalId = setInterval(function () {
  $countdownDisplay.textContent = $countdownDisplay.textContent - 1;
  if ($countdownDisplay.textContent === '0') {
    clearInterval(intervalId);
    $countdownDisplay.textContent = '~Earth Beeeelooowww Us~';
  }
}, 1000);
