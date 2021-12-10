/* exported swapChars */

function swapChars(firstIndex, secondIndex, string) {
  var stringArr = string.split('');
  stringArr.splice(firstIndex, 1, string[secondIndex]);
  stringArr.splice(secondIndex, 1, string[firstIndex]);
  return stringArr.join('');
}
