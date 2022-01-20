const fs = require('fs');
const dataJson = require('./data.json');
const listObj = dataJson.notes;
const cmd = process.argv[2];

if (cmd === 'read') {
  read(listObj);

} else if (cmd === 'create') {
  const item = process.argv[3];
  listObj[dataJson.nextId] = item;
  dataJson.nextId++;
  write(dataJson);

} else if (cmd === 'delete') {
  const removedItemId = process.argv[3];
  // logic gate:
  if (isNaN(+removedItemId)) {
    console.log('Please enter a valid list item number.');
  } else {
    delete listObj[removedItemId];
    write(dataJson);
  }

} else if (cmd === 'update') {
  const editedItemID = process.argv[3];
  const newItemText = process.argv[4];
  // logic gate:
  if (isNaN(+editedItemID)) {
    console.log('Please enter a valid list item number.');
  } else {
    listObj[editedItemID] = newItemText;
    write(dataJson);
  }

} else {
  console.log('Please enter valid command.');
}

// read and write functions:

function read(obj) {
  // loop through listObj and console log each key:
  for (const key in obj) {
    console.log(`${key}: ${obj[key]}`);
  }
}

function write(obj) {
  fs.writeFile('data.json', JSON.stringify(obj, null, 2), err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  });
}
