/* exported isVowel */

// Define a function named 'isVowel' with 1 parameter: 'char'
// To make the function consistent, unify the case of the char parameter by making it lowercase
// Compare the lowercased char parameter to a, e, i, o, u
// If the lowercased char paramenter is the same as the lowercased vowels, return true

function isVowel(char) {
  return char.toLowerCase() === 'a' || char.toLowerCase() === 'e' || char.toLowerCase() === 'i' || char.toLowerCase() === 'o' || char.toLowerCase() === 'u';
}

/* Could have also used a loop here to iterate through an array containing vowels
and compare the char parameter to the array values. */
