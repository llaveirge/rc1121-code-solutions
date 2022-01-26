const express = require('express');
const app = express();

let nextId = 1;
const grades = {};

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const gradesArray = [];

  for (const curId in grades) {
    gradesArray.push(grades[curId]);
  }
  if (gradesArray.length > 0) {
    res.json(gradesArray);
  } else {
    res.status(404).send('No grades here');
  }
});

app.post('/api/grades', (req, res) => {

  req.body.id = nextId;
  grades[nextId] = req.body;
  nextId++;

  res.status(201).send(req.body);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server is listening on port 3000!');
});
