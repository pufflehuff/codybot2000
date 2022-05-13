require('dotenv').config();
require('../database/index');

const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();

const routes = require('./routes');

app.use(express.json());
app.use(compression());
app.use(express.static(path.join(__dirname, '/../client/dist')));

const port = process.env.PORT || 3000;

app.get('/api/problems', routes.problems);

app.get('/api/problems/:_id', routes.problem);

app.get('/api/problems/:_id/comments', routes.comments);

app.get('/api/userStats/:username/:email/:first/:last', routes.userStats);

app.put('/api/problems/:_id', routes.modifyProblem);

app.put('/api/updateRating/:_id', routes.updateRating);

app.put('/api/reportProblem/:_id', routes.reportProblem);

app.post('/api/problems/:userId', routes.createProblem);

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
