const mongoose = require('mongoose');
const { PASSWORD, IP } = require('../config');

mongoose.connect(`mongodb://admin:${PASSWORD}@${IP}/codybot`);

const db = mongoose.connection;

db.on('error', () => {
  console.log('Cannot connect to MongoDB');
});

db.once('open', () => {
  console.log('Connection to MongoDB successful');
});

module.exports = db;
