/* exported takeRight */

// Define a function named 'takeRight' which has 2 parameters: 'array' and 'count'
// Make a copy of the 'array' parameter
// Include only the last indexes of the array, from the end up to the number from the 'count' parameter in the copy
// Copy the 'array' indexes from the end of the array by making the 'count' value negative
// Return the array copy

function takeRight(array, count) {
  return array.slice(-count);
}
