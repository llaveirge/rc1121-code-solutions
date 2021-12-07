function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

var secondsFromMinutes = convertMinutesToSeconds(5);
console.log('result from convertNumbersToMinutes fn:', secondsFromMinutes);

function greet(name) {
  return 'Hey, ' + name;
}

var greetingWithName = greet('Beavis');
console.log('result from greet fn:', greetingWithName);

function getArea(width, height) {
  var area = height * width;
  return area;
}

var calculatedArea = getArea(17, 42);
console.log('result from getArea fn:', calculatedArea);

function getFirstName(person) {
  return person.firstName;
}

var firstName = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log('result from getFirstName fn:', firstName);

function getLastElement(array) {
  return array[array.length - 1];
}

var arrayLastElement = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('result from getLastName fn:', arrayLastElement);
