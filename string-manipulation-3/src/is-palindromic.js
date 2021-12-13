/* exported isPalindromic */

// Define a function named 'isPalindromic' which has 1 parameter: 'string'
// Create a string that has all 'string' parameter characters lowercased and omits spaces
/* Iterate through the characters in the new string to see if the last letter is
 the same as the first, and so on working toward the middle of the string */
// If the first half of the string is the same as the last half, return true.
// If the first half of the string is not the same as the last half, return false.

function isPalindromic(string) {

  var stringCombined = string.replaceAll(' ', '').toLowerCase();

  for (var i = 0; i < stringCombined.length / 2; i++) {
    if (stringCombined[i] !== stringCombined[stringCombined.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
