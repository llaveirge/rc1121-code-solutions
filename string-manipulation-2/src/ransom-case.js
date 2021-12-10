/* exported ransomCase */

// Define a function called 'ransomCase' which has a single parameter; 'string'
// Create a string that is a copy of the 'string' parameter all lowercase to unify the letters
// Create an array from the lowercased string with each character as an item in the array
// Create an empty array to store alternating upper and lower case letters in, called 'ransomStringArr'
// Iterate through the lowercased string array, and check if the array index is even
// If the index number is even, then add that value to the 'ransomStringArr' array
// If the index number is odd, then make that value uppercase
// Add the new uppercase value to the 'ransomStringArr' array
// Turn the 'ransomStringArr' array values into a string
// Return the string

function ransomCase(string) {
  var stringLowerCased = string.toLowerCase();
  var stringArr = Array.from(stringLowerCased);
  var ransomStringArr = [];

  for (var i = 0; i < stringArr.length; i++) {
    if (i % 2 === 0) {
      ransomStringArr.push(stringArr[i]);
    } else {
      ransomStringArr.push(stringArr[i].toUpperCase());
    }
  }
  return ransomStringArr.join('');
}
