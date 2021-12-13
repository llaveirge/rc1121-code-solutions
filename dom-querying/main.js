console.log('hello, world');

var $heading = document.querySelector('h1');
console.log('$heading value:', $heading);
console.dir($heading);

var $explanation = document.querySelector('#explanation');
console.log('$explanation vlaue:', $explanation);
console.dir($explanation);

var $hint = document.querySelector('.hint');
console.log('value of $hint:', $hint);

var $paragraphs = document.querySelectorAll('p');
console.log('$paragraphs value:', $paragraphs);

var $links = document.querySelectorAll('.example-link');
console.log('$links value:', $links);
