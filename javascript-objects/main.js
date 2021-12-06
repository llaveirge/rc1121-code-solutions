// student Object:

var student = {
  firstName: 'Lindsey',
  lastName: 'Laveirge',
  age: 32
};

var fullName = `${student.firstName} ${student.lastName}`;

student.livesInIrvine = false;

student.previousOccupation = 'Head of Budgeting, Programming, and Administrative Assistant';

console.log('value of fullName:', fullName);
console.log('value of livesInIrvine:', student.livesInIrvine);
console.log('value of previousOccupation:', student.previousOccupation);
console.log('value of student object:', student);

// vehicle Object:

var vehicle = {
  make: 'Pagani',
  model: 'Zonda Roadster F',
  year: 2018
};

vehicle['color'] = 'deep wine and black';

vehicle['isConvertible'] = true;

console.log('value of color:', vehicle['color']);
console.log('value of isConvertible:', vehicle['isConvertible']);
console.log('value of vehicle object:', vehicle);

// pet Object:

var pet = {
  name: 'Tybalt',
  type: 'Dog'
};

delete pet.name;
delete pet.type;

console.log('value of pet object:', pet);
