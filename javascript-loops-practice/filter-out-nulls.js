/* exported filterOutNulls */

function filterOutNulls(values) {
  var noNulls = [];
  for (var num of values) {
    if (num !== null) {
      noNulls.push(num);
    }
  }
  return noNulls;
}
