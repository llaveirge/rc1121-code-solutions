
var $lightBulb = document.getElementById('light-bulb');
var $background = document.getElementById('container');

function switched(event) {
  if ($lightBulb.className === 'off') {
    $lightBulb.className = 'on';
    $background.className = 'light';
  } else if ($lightBulb.className === 'on') {
    $lightBulb.className = 'off';
    $background.className = 'dark';
  }
}

$lightBulb.addEventListener('click', switched);
