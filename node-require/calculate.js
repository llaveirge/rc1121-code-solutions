const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const num1 = +process.argv[2];
const num2 = +process.argv[4];
const operator = process.argv[3];

let solution = null;

if (operator === 'plus') {
  solution = add(num1, num2);
} else if (operator === 'minus') {
  solution = subtract(num1, num2);
} else if (operator === 'times') {
  solution = multiply(num1, num2);
} else if (operator === 'over') {
  solution = divide(num1, num2);
} else {
  console.log('Please enter a valid mathmatical operator');
  process.exit();
}

console.log('result:', solution);
