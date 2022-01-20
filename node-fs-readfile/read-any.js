const fs = require('fs');
const anyFile = process.argv[2];

fs.readFile(anyFile, 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
