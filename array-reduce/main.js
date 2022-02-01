const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

// sum:
const sum = numbers.reduce(
  (previousValue, currentValue) => previousValue + currentValue);
console.log('sum:', sum);

// product:
const product = numbers.reduce(
  (previousValue, currentValue) => previousValue * currentValue);
console.log('product:', product);

// balance:
const initialValue = 0;
const balance = account.reduce(
  (previousValue, currentValue) => {
    if (currentValue.type === 'deposit') {
      return previousValue + currentValue.amount;
    } else {
      return previousValue - currentValue.amount;
    }
  }, initialValue
);

console.log('balance:', balance);

// composit:
const compositInitial = {};
const composit = traits.reduce(
  (previousValue, currentObj) => {
    const newObj = Object.assign(compositInitial, currentObj);
    return newObj;
  }, compositInitial
);

console.log('composit:', composit);
