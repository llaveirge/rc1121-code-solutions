/* exported getKeys */

// Define a function called 'getKeys' which has a single parameter: 'object'
// Create an empty array to store the 'object' parameter's keys, called 'keysArr'
// Iterate through the 'object' parameter and identify the keys
// Add all of the key names to the 'keysArr' array
// Return the 'keysArr' array

function getKeys(object) {
  var keysArr = [];
  for (var key in object) {
    keysArr.push(key);
  }
  return keysArr;
}
