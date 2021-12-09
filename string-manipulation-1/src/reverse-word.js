/* exported reverseWord */

function reverseWord(word) {
  var newWordArr = [];
  for (var i = 0; i < word.length; i++) {
    newWordArr.unshift(word[i]);
  }
  return newWordArr.join('');
}
