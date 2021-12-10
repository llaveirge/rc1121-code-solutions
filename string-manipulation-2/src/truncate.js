/* exported truncate */

// Define a function named 'truncate' which has 2 parameters: 'length' and 'string'
// Copy the 'string' parameter, but only the number of characters up to the number from the 'length' parameter
// Store the string copy in a new string called 'newString'
// Concatenate 'newString' with an ellipsis and call it 'truncatedString'
// Return the 'truncatedString' string

function truncate(length, string) {
  var newString = string.slice(0, length);
  var truncatedString = newString + '...';
  return truncatedString;
}
