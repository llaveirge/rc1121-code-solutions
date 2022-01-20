const fs = require('fs');
const num = `${Math.random()}
`;

fs.writeFile('random.txt', num, 'utf8', err => {
  if (err) throw err;
});
