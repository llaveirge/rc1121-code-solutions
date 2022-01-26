const fs = require('fs');
const express = require('express');
const app = express();
const dataJson = require('./data.json');
const notes = dataJson.notes;

app.use(express.json());

// request all notes:
app.get('/api/notes', (req, res) => {
  const notesArray = [];

  for (const curNote in notes) {
    notesArray.push(notes[curNote]);
  }
  res.json(notesArray);
});

// request a specific note:
app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  // verify id is positive integer and is included in the data:
  if (id < 0 || isNaN(id)) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (id in notes === false) {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  } else {
    res.json(notes[id]);
  }
});

// request to add a note:
app.post('/api/notes', (req, res) => {
  const newNote = req.body;

  // verify that content is included:
  if (!newNote.content) {
    res.status(400).json({ error: 'content is a required field' });
    return;
  }

  // If content is included, assign it an ID and add it to data.json:
  const nextId = dataJson.nextId;
  newNote.id = nextId;
  notes[nextId] = newNote;
  dataJson.nextId++;
  fs.writeFile('data.json', JSON.stringify(dataJson, null, 2), err => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    } else {
      res.status(201).json(newNote);
    }
  });
});

// request to delete a note:
app.delete('/api/notes/:deleteId', (req, res) => {
  const deleteId = Number(req.params.deleteId);

  // verify id is positive integer and is included in the data:
  if (deleteId < 0 || isNaN(deleteId)) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (deleteId in notes === false) {
    res.status(404).json({ error: `cannot find note with id ${deleteId}` });
  } else {
    // Once verified, delete note from data, and update data.json:
    delete notes[deleteId];
    fs.writeFile('data.json', JSON.stringify(dataJson, null, 2), err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.sendStatus(204);
      }
    });
  }
});

// request to replace a note:
app.put('/api/notes/:updateId/', (req, res) => {
  const updateId = Number(req.params.updateId);
  const updateNote = req.body;

  // verify id is positive integer, is included in the data, and body has content:
  if (updateId < 0 || isNaN(updateId)) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (updateId in notes === false) {
    res.status(404).json({ error: `cannot find note with id ${updateId}` });
  } else if (!updateNote.content) {
    res.status(400).json({ error: 'content is a required field' });
  } else {
    // Once verified, update note and data.json:
    updateNote.id = updateId;
    notes[updateId] = updateNote;
    fs.writeFile('data.json', JSON.stringify(dataJson, null, 2), err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.json(updateNote);
      }
    });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server is listening on port 3000!');
});
