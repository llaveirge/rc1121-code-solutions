/* exported equal */

// Define a function named 'equal' which takes two parameters: 'first' and 'second'
// Compare the 'first' parameter with the 'second' parameter to see if they have
// an equal number of indexes
// If they have an equal number of indexes, iterate through the 'first' parameter
// and compare it to the same index of the 'second' parameter
// If the indexes are not the same, return false, othewise, return true

function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}
