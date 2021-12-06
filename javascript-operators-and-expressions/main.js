var width = 3;
var height = 15;

var area = height * width;

var bill = 42;
var payment = 50;

var change = payment - bill;

var quizzes = 85;
var midterm = 90;
var final = 95;

var grade = (quizzes + midterm + final) / 3;

var firstName = 'Lindsey';
var lastName = 'Lavierge';

var fullName = firstName + ' ' + lastName;
/* could have also separated the variables with a comma and it would
automatically insert the space. */

var pH = 4;
var isAcidic = pH < 7;

var headCount = 25;
var isSparta = headCount === 300;

var motto = fullName;
motto += ' is the GOAT';

console.log('value of area:', area);
console.log('typeof area:', typeof area);

console.log('value of change:', change);
console.log('typeof change:', typeof change);

console.log('value of grade:', grade);
console.log('typeof grade:', typeof grade);

console.log('value of fullName:', fullName);
console.log('typeof fullName:', typeof fullName);

console.log('value of isAcidic:', isAcidic);
console.log('typeof isAcidic:', typeof isAcidic);

console.log('value of isSparta:', isSparta);
console.log('typeof isSparta:', typeof isSparta);

console.log('value of motto: ', motto);
console.log('typeof motto:', typeof motto);
