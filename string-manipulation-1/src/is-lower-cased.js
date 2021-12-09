/* exported isLowerCased */

// Define a function named 'isLowerCased' with 1 parameter: 'word'
/* See if al characters of the 'word' parameter are lowercase by comparing it
 to word as if it were entirely lowercased using .toLowerCase() method */
// If word is the same as word entirely lowercased, return true.

function isLowerCased(word) {
  return word === word.toLowerCase();
}
