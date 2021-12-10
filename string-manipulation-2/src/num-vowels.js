/* exported numVowels */

function numVowels(string) {
  var num = 0;
  for (var char of string) {
    if (char.toLowerCase() === 'a' || char.toLowerCase() === 'e' || char.toLowerCase() === 'i' || char.toLowerCase() === 'o' || char.toLowerCase() === 'u') {
      num++;
    }
  }
  return num;
}
