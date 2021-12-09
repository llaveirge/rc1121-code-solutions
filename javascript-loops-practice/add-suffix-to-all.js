/* exported addSuffixToAll */

function addSuffixToAll(words, suffix) {
  var appendedWords = [];
  for (var word of words) {
    appendedWords.push(word + suffix);
  }
  return appendedWords;
}
