const mongoose = require('mongoose');

mongoose.connect(`mongodb://${process.env.USERNAME}:${process.env.PASSWORD}@${process.env.IP}/codybot`);

const db = mongoose.connection;

db.on('error', () => {
  console.log('Cannot connect to MongoDB');
});

db.once('open', () => {
  console.log('Connection to MongoDB successful');
});

module.exports = db;
