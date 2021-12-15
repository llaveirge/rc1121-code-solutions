var $span = document.querySelectorAll('span');
var $body = document.querySelector('body');
var $typingAccuracy = document.querySelector('.accuracy');
var curPos = 0;
var buttonCount = 0;

function tutor(event) {
  buttonCount++;

  if (event.key === $span[curPos].textContent) {
    $span[curPos].className = 'correct';
    if (curPos < $span.length - 1) {
      $span[curPos + 1].className = 'active';
      $typingAccuracy.textContent = 'Typing Accuracy: ' + ((curPos + 1) / buttonCount * 100).toFixed(2) + '%';
      curPos++;
    }
  } else if (event.key !== $span[curPos].textContent) {
    $span[curPos].className = 'incorrect';
  }
}

$body.addEventListener('keydown', tutor);
