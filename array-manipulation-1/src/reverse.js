/* exported reverse */

function reverse(array) {
  var reversedArr = [];
  for (var index of array) {
    reversedArr.unshift(index);
  }
  return reversedArr;
}
