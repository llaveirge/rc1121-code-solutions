function map(array, transform) {

  const transformedArr = [];
  const mapObj = {
    mapFn: transform
  };

  for (const index of array) {
    transformedArr.push(mapObj.mapFn(index));
  }
  return transformedArr;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

console.log('double numbers:', map(numbers, number => number * 2));
console.log('numbers as prices:', map(numbers, number => `$${number.toFixed(2)}`));
console.log('capitalize all letters in all strings:',
  map(languages, language => language.toUpperCase()));
