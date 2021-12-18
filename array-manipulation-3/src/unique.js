/* exported unique */

// Define a function called 'unique' which has one parameter: 'array'.
// Create an empty array called 'uniqueArr' to store only the unique items in 'array' parameter.
// Iterate through 'array' parameter, and check to see if item in 'uniqueArr' array.
// If the item is not in 'uniqueArr' array, then add it, if it's in 'uniqueArr'
// already, keep checking the other items in 'array' parameter.
// Return unique array.

function unique(array) {
  var uniqueArr = [];
  for (var curItem of array) {
    if (uniqueArr.indexOf(curItem) === -1) {
      uniqueArr.push(curItem);
    }
  }
  return uniqueArr;
}
