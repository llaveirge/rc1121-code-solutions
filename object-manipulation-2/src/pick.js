/* exported pick */
// Define a function named 'pick' which has 2 parameters: 'source' and 'keys'
// Create an empty object to store the desired keys and values in
// Iteratre through the 'keys' parameter
// Check if a value in 'keys' parameter is the same as a property in the 'source' parameter
// If the 'keys' parameter value matches a 'source' parameter key, add the key and value to the new object
// Check if any on the new object's keys have an undefined value, and if so delete the key
// Return the new 'sourceKeysObj' object

function pick(source, keys) {
  var sourceKeysObj = {};

  for (var prop of keys) {
    if (prop in source) {
      sourceKeysObj[prop] = source[prop];
      if (sourceKeysObj[prop] === undefined) {
        delete sourceKeysObj[prop];
      }
    }
  }
  return sourceKeysObj;
}
