/* exported getValues */

// Define a function called 'getValues' which has a single parameter: 'object'
// Create an empty array to store the 'object' parameter's key values, called 'valuesArr'
// Iterate through the keys of the 'object' parameter and identify the values
// Add all of the values to the 'valuesArr' array
// Return the 'valuesArr' array

function getValues(object) {
  var valuesArr = [];
  for (var key in object) {
    valuesArr.push(object[key]);
  }
  return valuesArr;
}
