/* exported capitalizeWord */

// Define a function named 'capitalizeWord' that takes 1 parameter: 'word'
// First, check to see if 'word' parameter, in all lowercase, is the same as 'javascript'
// If it is the same as 'javascript', then return 'JavaScript'
// If the 'word' parameter, all lowercase, is not 'javascript, then unify all characters of word by making them all lowercase
// Store the new lowercased 'word' parameter in a variable called 'wordLowerCased'
// Capitalize the first character of the lowercased word and store it in a variable called 'firstLetter'
// Create a new string that doesn't include the first letter of the lowercased word called 'restOfWord'
// Concatenate the 'firstletter' with 'restOfWord'
// Return new concatenated string

function capitalizeWord(word) {
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  } else {
    var wordLowerCased = word.toLowerCase();
    var firstLetter = wordLowerCased.charAt(0);
    var restOfWord = wordLowerCased.slice(1);
  }
  return firstLetter.toUpperCase() + restOfWord;
}
