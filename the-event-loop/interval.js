let count = 3;
let countDownId = null;

function countDown() {
  if (count > 0) {
    console.log(count);
    count--;
  } else {
    console.log('Blast off!');
    clearInterval(countDownId);
  }
}

countDownId = setInterval(countDown, 1000);
