function filter(array, predicate) {

  const filteredArr = [];
  const filterObj = {
    filterFn: predicate
  };

  for (const index of array) {
    if (filterObj.filterFn(index)) {
      filteredArr.push(index);
    }
  }

  return filteredArr;
}

console.log(filter([0, 1, 2, 3, 4, 5, 6], number => number % 2 === 0));
console.log(filter([0, 1, 2, 3, 4, 5, 6], number => number > 5));
console.log(filter([
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
], name => name.startsWith('E')));
