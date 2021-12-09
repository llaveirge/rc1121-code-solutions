/* exported initial */

// Define a function named 'initial' which has a single parameter: 'array'
// Create an empty array to store desired idexes of 'array' parameter
// Iterate through the 'array' parameter, stopping before the last index
// Add all but the last index of the 'array' parameter to the new 'initialArr' array
// Return the 'initial' array

function initial(array) {
  var initialArr = [];
  for (var i = 0; i < array.length - 1; i++) {
    initialArr.push(array[i]);
  }
  return initialArr;
}
