const takeAChance = require('./take-a-chance');

const myChance = takeAChance('lindsey');

myChance.then(val => {
  console.log(val);
}, reason => {
  console.log(reason.message);
});
