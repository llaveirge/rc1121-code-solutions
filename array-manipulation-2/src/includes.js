/* exported includes */

// Define a function named 'includes' which has 2 parameters: 'array' and 'value'
// Iterate through the indexes of the 'array' parameter
// Check if any of the index values are the same as the 'value' parameter
// Return true if there are any index matches, or return false if there aren't any matches

function includes(array, value) {
  for (var index of array) {
    if (index === value) {
      return true;
    }
  }
  return false;
}
