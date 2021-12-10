/* exported drop */

// Define a function called 'drop' which has 2 parameter: 'array' and 'count'
// Make a copy of the 'array' parameter that omits the first items upto the 'count' parameter
// Return the array copy

function drop(array, count) {
  return array.slice(count);
}
