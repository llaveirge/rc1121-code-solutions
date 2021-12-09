/* exported isUpperCased */

// Define a function named 'isUpperCased' with 1 parameter: 'word'
/* See if al characters of the 'word' parameter are capitalized by comparing it
 to word as if it were entirely capitalized using .toUpperCase() method */
// If word is the same as word entirely capitalized, return true.

function isUpperCased(word) {
  return word === word.toUpperCase();
}
