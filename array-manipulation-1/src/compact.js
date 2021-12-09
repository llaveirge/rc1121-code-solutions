/* exported compact */

function compact(array) {
  var truthyArr = [];

  for (var index of array) {
    if (Boolean(index) === true) {
      truthyArr.push(index);
    }
  }
  return truthyArr;
}
