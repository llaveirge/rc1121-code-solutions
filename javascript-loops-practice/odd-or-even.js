/* exported oddOrEven */

function oddOrEven(numbers) {
  var oddEvenArr = [];

  for (var num of numbers) {
    if (typeof num !== 'number') {
      return 'Only number values, please!';
    } else if (num % 2 === 0) {
      oddEvenArr.push('even');
    } else {
      oddEvenArr.push('odd');
    }
  }
  return oddEvenArr;
}
