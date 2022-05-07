const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/codybot');

const db = mongoose.connection;

db.on('error', () => {
  console.log('Cannot connect to MongoDB');
});

db.once('open', () => {
  console.log('Connection to MongoDB successful');
});

module.exports = db;
