var bookShelf = [
  {
    title: 'The Pragmatic Programmer: Your Journey To Mastery',
    isbn: '978-0135957059',
    author: 'David Thomas'
  },
  {
    title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
    isbn: '978-0132350884',
    author: 'Robert C. Martin'
  },
  {
    title: 'Cracking the Coding Interview',
    isbn: '978-0984782857',
    author: 'Gayle Laakmann McDowell'
  }
];

console.log('array:', bookShelf);
console.log('array type:', typeof bookShelf);

console.log('stringified array:', JSON.stringify(bookShelf));
console.log('type of stringified array:', typeof JSON.stringify(bookShelf));

var studentString = '{"id": 4327, "name":"Jane Doe"}';

console.log('studentString', studentString);
console.log('type of studentString:', typeof studentString);

JSON.parse(studentString);
console.log('parsed studentString:', JSON.parse(studentString));
console.log('type of parsed studentString:', typeof JSON.parse(studentString));
