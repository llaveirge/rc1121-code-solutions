/* exported union */

function union(first, second) {
  var combinedArr = first.concat(second);

  var unionArr = [];
  for (var curItem of combinedArr) {
    if (unionArr.indexOf(curItem) === -1) {
      unionArr.push(curItem);
    }
  }
  return unionArr;
}
