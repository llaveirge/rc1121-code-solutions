/* exported isAnagram */

// Define a function named 'isAnagram' with two parameters: 'firstString', 'secondString'
// Unify all the letters in the strings by making them all lower case
/* Alpabetically sort the the 'firstString' parameter and store the sorted string in
the variable 'sortedFirstString' */
/* Alpabetically sort the the 'secondString' parameter and store the sorted string in
the variable 'sortedSecondString' */
// Check to see if 'sortedFirstString' is the exact same as 'sortedSecondString'
// If the the sorted strings are not the same, return false
// Of the sorted strings are the same, return true

function isAnagram(firstString, secondString) {

  var sortedFirstString = firstString.toLowerCase().split(' ').join('').split('').sort().join('');
  var sortedSecondString = secondString.toLowerCase().split(' ').join('').split('').sort().join('');

  if (sortedFirstString !== sortedSecondString) {
    return false;
  }
  return true;
}
