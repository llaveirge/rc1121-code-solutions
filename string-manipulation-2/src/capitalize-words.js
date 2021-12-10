/* exported capitalizeWords */

// Define a function called capitalizeWords which has 1 parameter; 'string'
// First, unify the case for all words in the 'string' parameter to lower case
// Create an array of all the separate words in the 'string' parameter
// Create an empty array to store all the first letters of each word
// Create an empty array to store all letters of each word but the first
// Create an empty array to store all the capitalized words in
// Iterate through the array with all the lowercased words
// Add the first letter of all the words to the 'firstLetters' array and capitalize them
// Add all but the first letter of each word to the 'allOtherLetters' array
/* Add each capital letter in the 'firstLetters' array with each word
fragment in the 'allOtherLetters' array, in order */
// Add the newly formed words to the 'capitalizedWords' array
// Turn all of the words in the 'capitalizedWords' array into a string, separated by commas

function capitalizeWords(string) {
  var stringLowerCased = string.toLowerCase();
  var wordsArr = stringLowerCased.split(' ');
  var firstLetters = [];
  var allOtherLetters = [];
  var capitalizedWords = [];

  for (var i = 0; i < wordsArr.length; i++) {
    firstLetters.push(wordsArr[i][0].toUpperCase());
    allOtherLetters.push(wordsArr[i].substring(1));
    capitalizedWords.push(firstLetters[i] + allOtherLetters[i]);
  }
  return capitalizedWords.join(' ');
}
