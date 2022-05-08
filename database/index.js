const mongoose = require('mongoose');
const { PASSWORD } = require('../config');

mongoose.connect(`mongodb://admin:${PASSWORD}@3.90.209.15/codybot`);

const db = mongoose.connection;

db.on('error', () => {
  console.log('Cannot connect to MongoDB');
});

db.once('open', () => {
  console.log('Connection to MongoDB successful');
});

module.exports = db;
