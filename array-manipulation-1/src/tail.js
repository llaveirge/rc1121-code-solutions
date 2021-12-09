/* exported tail */

// Define a function named 'tail' which has a single parameter: 'array'
// Create an empty array to store desired idexes of 'array' parameter
// Iterate through the 'array' parameter starting at the end and stopping at the second index
// Add all but the first index of the 'array' parameter to the new 'tailArr' array
// Return the 'tailArr' array

function tail(array) {
  var tailArr = [];
  for (var i = array.length - 1; i > 0; i--) {
    tailArr.unshift(array[i]);
  }
  return tailArr;
}
