/* exported includesSeven */

function includesSeven(array) {
  for (var index of array) {
    if (index === 7) {
      return true;
    }
  }
  return false;
}
