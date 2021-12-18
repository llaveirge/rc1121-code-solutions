/* exported flatten */

// Define a function named 'flatten' which has one parameter: 'array'.
// Create an empty array to store the flattened array and assign it to
// 'flattenedArr' variable.
// Iterate through the 'array' parameter and check to see if any items in the array
// are arrays.
// If the item isn't an array, add it to the 'flattenedArr' array.
// If the item is an array, itererate through that array, and add each item
// to the 'flattenedArr' array.
// Return 'flattenedArr'.

function flatten(array) {
  var flattenedArr = [];

  for (var curIndex of array) {
    if (Array.isArray(curIndex) === false) {
      flattenedArr.push(curIndex);
    } else if (Array.isArray(curIndex)) {
      for (var innerIndex of curIndex) {
        flattenedArr.push(innerIndex);
      }
    }
  }

  return flattenedArr;
}
