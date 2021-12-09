/* exported getWords */

function getWords(string) {
  if (string === '') {
    return [];
  } else {
    var wordsArr = string.split(' ');
  }
  return wordsArr;
}
