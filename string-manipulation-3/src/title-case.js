/* exported titleCase */

function titleCase(title) {
  var stringLowerCased = title.toLowerCase();
  var wordsArr = stringLowerCased.split(' ');

  var returnArr = [];

  for (var i = 0; i < wordsArr.length; i++) {
    var curWord, curWord1;

    // hard Coded JavaScript
    var pos = wordsArr[i].indexOf('javascript');

    if (pos > -1) {
      curWord = (wordsArr[i].replace('javascript', 'JavaScript'));
      returnArr.push(curWord);
      curWord = '';
      pos = '';
      continue;
    }

    // hard coded 'API'
    if (wordsArr[i] === 'api') {
      wordsArr[i] = 'API';
      returnArr.push(wordsArr[i]);
      continue;
    }

    // hard coded API with colon for edge cases
    if (wordsArr[i] === 'api:') {
      wordsArr[i] = 'API:';
      returnArr.push(wordsArr[i]);
      continue;
    }

    // catches hyphenated words
    pos = wordsArr[i].indexOf('-');
    if (pos > 0) {
      // checks first word of hyphenated word and capitalizes it, then slices upto and includes the hyphen.
      curWord = wordsArr[i][0].toUpperCase() + wordsArr[i].slice(1, pos + 1);
      // checks second word and capitalzes first letter, then slices all letters after hyphen.
      curWord1 = wordsArr[i][pos + 1].toUpperCase() + wordsArr[i].slice(pos + 2);
      // joins first half and second half and pushes to to returnArr
      returnArr.push(curWord + curWord1);
      curWord = '';
      curWord1 = '';
      continue;
    }

    // catches the first word of the title
    if (i === 0) {
      curWord = wordsArr[i][0].toUpperCase() + wordsArr[i].slice(1);
      returnArr.push(curWord);
      curWord = '';
      continue;
    }

    // catch subtitles, check if previous word contained colon.

    if (i > 0 && wordsArr[i - 1].includes(':')) {
      curWord = wordsArr[i][0].toUpperCase() + wordsArr[i].slice(1);
      returnArr.push(curWord);
      curWord = '';
      continue;
    }

    // catch lowercase words
    var lower = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'per', 'on', 'to'];

    if (lower.includes(wordsArr[i])) {
      returnArr.push(wordsArr[i]);
      continue;
    }

    // capitalize everything else:
    if (wordsArr[i].length > 0) {
      curWord = wordsArr[i][0].toUpperCase() + wordsArr[i].slice(1);
      returnArr.push(curWord);
      curWord = '';
      continue;
    }

  }

  return returnArr.join(' ');

}
