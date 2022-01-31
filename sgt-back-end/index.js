const express = require('express');
const app = express();
const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.use(express.json());

// Request all rows in the grades table:
app.get('/api/grades', (req, res, next) => {

  const sql = `
    select *
      from "grades"
  `;

  db.query(sql)
    .then(result => {
      const gradesTable = result.rows;
      res.json(gradesTable);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

// Add a new grade to the table:
app.post('/api/grades', (req, res, next) => {
  const name = req.body.name;
  const course = req.body.course;
  const score = Number(req.body.score);

  // Check to make sure all information was included in the POST:
  if (!name || !course || !score) {
    res.status(400).json({ error: 'Grade information is not valid, please include name, course, and score integer.' });
    return;
  }

  // Check to make sure score is an integer betwee 0 and 100:
  if (!Number.isInteger(score) || score < 0 || score > 100) {
    res.status(400).json({ error: 'Score must be a positive integer between 0 and 100.' });
    return;
  }

  const sql = `
    insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
    returning *;
  `;
  const values = [name, course, score];

  db.query(sql, values)
    .then(result => {
      const grade = result.rows[0];
      res.status(201).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

// Update an existing gade in the table:
app.put('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);
  const name = req.body.name;
  const course = req.body.course;
  const score = Number(req.body.score);

  // Check to make sure gradeId is a positive integer:
  if (!Number.isInteger(gradeId) || gradeId < 1) {
    res.status(400).json({ error: 'Grade ID must be a positive integer.' });
    return;
  }

  // Check to make sure all information was included in the POST:
  if (!name || !course || !score) {
    res.status(400).json({ error: 'Grade information is not valid, please include name, course, and score integer.' });
    return;
  }

  // Check to make sure score is an integer betwee 0 and 100:
  if (!Number.isInteger(score) || score < 0 || score > 100) {
    res.status(400).json({ error: 'Score must be a positive integer between 0 and 100.' });
    return;
  }

  const sql = `
    update "grades"
      set "name" = $1,
          "course" = $2,
          "score" = $3
    where "gradeId" = $4
    returning *;
  `;
  const values = [name, course, score, gradeId];

  db.query(sql, values)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot locate grade with ID number ${gradeId}, please try again.`
        });
      } else {
        res.json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

// Delete a grade from the table:
app.delete('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);

  // Check to make sure gradeId is a positive integer:
  if (!Number.isInteger(gradeId) || gradeId < 1) {
    res.status(400).json({ error: 'Grade ID must be a positive integer.' });
    return;
  }

  const sql = `
    delete from "moreRandomStuff"
      where "gradeId" = $1
    returning *;
  `;
  const values = [gradeId];

  db.query(sql, values)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot locate grade with ID number ${gradeId}, please try again.`
        });
      } else {
        res.sendStatus(204);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
