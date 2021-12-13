/* exported omit */

// Define a function named 'omit' which has 2 parameters: 'source' and 'keys'
// Create a copy of the 'source' parameter called 'omitObj'
// Iteratre through the 'keys' parameter
// Check if a value in 'keys' parameter is the same as a property in the 'source' parameter
// If the 'keys' parameter value matches a 'source' parameter key, delete the key and value from 'omitObj'
// Return the new 'omitObj' object

function omit(source, keys) {
  var omitObj = { ...source };

  for (var prop of keys) {
    if (prop in source) {
      delete omitObj[prop];
    }
  }
  return omitObj;
}
