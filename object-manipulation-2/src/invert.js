/* exported invert */

function invert(source) {
  var invertedObj = {};
  var keysArr = Object.keys(source);
  var valuesArr = Object.values(source);

  for (var i = 0; i < keysArr.length; i++) {
    invertedObj[valuesArr[i]] = keysArr[i];
  }

  return invertedObj;
}
