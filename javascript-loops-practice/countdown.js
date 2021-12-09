/* exported countdown */

function countdown(number) {
  var countDownArr = [];

  while (number >= 0) {
    countDownArr.push(number);
    number--;
  }
  return countDownArr;
}
