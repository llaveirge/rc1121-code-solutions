// Math object:

var lowest = 3;
var secondLowest = 15;
var highest = 72;

var maximumValue = Math.max(lowest, secondLowest, highest);
console.log('value of maximumValue:', maximumValue);

var heroes = ['Dream', 'Crazy Jane', 'John Constantine', 'Beast'];
var randomNumber = Math.random();
console.log('value of randomNumber:', randomNumber);
randomNumber *= heroes.length;
console.log('new value of randomNumber:', randomNumber);

var randomIndex = Math.floor(randomNumber);
console.log('value of randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];
console.log('value of randomHero:', randomHero);

// Aray Methods:

var library = [
  {
    title: 'Stranger in a Strangeland',
    author: 'Robert A. Heinlein'
  },
  {
    title: 'The Martian Chronicles',
    author: 'Ray Bradbury'
  },
  {
    title: "The Ultimate Hitchhiker's Guide to the Galaxy",
    author: 'Douglas Adams'
  }
];

var lastBook = library.pop();
console.log('value of lastBook:', lastBook);

var firstBook = library.shift();
console.log('value of firstBook:', firstBook);

library.push({ title: 'JavaScript & JQuery: interactive front-end web development', author: 'Jon Duckett' });

library.unshift({ title: 'HTML & CSS: design and build websites', author: 'Jon Duckett' });

library.splice(1, 1);
console.log('value of library:', library);

// String Methods:

var fullName = 'Lindsey Laveirge';

var firstAndLastName = fullName.split(' ');
console.log('value of firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];

var sayMyName = firstName.toUpperCase();
console.log('value of sayMyName:', sayMyName);
