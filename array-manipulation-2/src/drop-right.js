/* exported dropRight */

// Define a function named 'dropRight' which has 2 parameters: 'array' and 'count'
// Make a copy of the 'array' parameter
// Include all the array indexes except the last number of indexes dictated by the 'count' parameter
// Remove the last indexes from the array for the copy by making the 'count' value negative
// Return the array copy

function dropRight(array, count) {
  return array.slice(0, -count);
}
