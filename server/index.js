require('dotenv').config();
require('../database/index');

const express = require('express');
const path = require('path');

const app = express();

const routes = require('./routes');

app.use(express.json());
app.use(express.static(path.join(__dirname, '/../client/dist')));

const port = process.env.PORT || 3000;

app.get('/api/problems', routes.problems);

app.get('/api/problems/:id', routes.problem);

app.get('/api/problems/:id/comments', routes.comments);

app.post('/api/problems', routes.createProblem);

// handle browser refresh with react-router
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/dist/index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}/`);
});
