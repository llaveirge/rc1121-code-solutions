/* exported reverseWords */

function reverseWords(string) {
  var stringArr = string.split(' ');
  var reversedArr = [];

  for (var i = 0; i < stringArr.length; i++) {
    var reversedWord = [];
    for (var j = stringArr[i].length - 1; j >= 0; j--) {
      reversedWord.push(stringArr[i][j]);
    }
    reversedArr.push(reversedWord.join(''));
  }
  return reversedArr.join(' ');
}
