/* exported difference */

function difference(first, second) {
  var symDif = [];

  for (var firstItem of first) {
    if (!second.includes(firstItem)) {
      symDif.push(firstItem);
    }
  }

  for (var secondItem of second) {
    if (!first.includes(secondItem)) {
      symDif.push(secondItem);
    }
  }

  return symDif;

}
