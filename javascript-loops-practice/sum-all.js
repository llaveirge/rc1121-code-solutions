/* exported sumAll */

function sumAll(numbers) {
  var totalSum = 0;

  for (var num of numbers) {
    totalSum += num;
  }
  return totalSum;
}
