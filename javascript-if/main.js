/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

function isUnderFive(number) {
  return number < 5;
}
// comparison operators return boolean values, no need for an if statment

function isEven(number) {
  return number % 2 === 0;
}

function startsWithJ(string) {
  return string[0] === 'J';
}

function isOldEnoughToDrink(person) {
  return person.age >= 21;
}

function isOldEnoughToDrive(person) {
  return person.age >= 16;
}

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

function categorizeAcidity(pH) {
  if (pH >= 0 && pH < 7) {
    return 'acid';
  } else if (pH === 7) {
    return 'neutral';
  } else if (pH > 7 && pH <= 14) {
    return 'base';
  }
  return 'invalid pH level';
}

function introduceWarnerBro(name) {
  if (name.toLowerCase() === 'yakko' || name.toLowerCase() === 'wakko') {
    return "We're the warner brothers!";
  } else if (name.toLowerCase() === 'dot') {
    return "I'm cute~";
  }
  return 'Goodnight everybody!';
}
