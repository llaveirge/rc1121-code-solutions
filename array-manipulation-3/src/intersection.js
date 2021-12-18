/* exported intersection */

function intersection(first, second) {
  var intersect = [];

  for (var firstItem of first) {
    if (second.includes(firstItem)) {
      intersect.push(firstItem);
    }
  }

  return intersect;

}
