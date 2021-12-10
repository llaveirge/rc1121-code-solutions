/* exported chunk */

function chunk(array, size) {
  var chunkedArr = [];

  for (var i = 0; i < Math.ceil(array.length / size); i++) {
    chunkedArr.push(array.slice((i * size), size * i + size));
  }
  return chunkedArr;
}
