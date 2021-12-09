/* exported capitalize */

// Define a function named 'capitalize' that takes 1 parameter: 'word'
// Unify all characters of word by making them all lowercase and store in variable
// Capitalize the first character of the lowercased word and store in a variable
// Create a new string that doesn't include the first letter of the lowercased word
// Concatenate the capitalized first letter of the word with the rest of the lowercased word
// Return new concatenated string

function capitalize(word) {
  var wordLowerCased = word.toLowerCase();
  var firstLetter = wordLowerCased.charAt(0);
  var restOfWord = wordLowerCased.slice(1);
  return firstLetter.toUpperCase() + restOfWord;
}
