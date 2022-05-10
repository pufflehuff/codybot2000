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

app.get('/api/userStats/:username', routes.userStats);

app.post('/api/problems', routes.createProblem);

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}/`);
});
