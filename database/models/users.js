const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
  username: String,
  firstName: String,
  lastName: String,
  email: String,
  problems: [{
    problemId: String,
    problemName: String,
    isComplete: Boolean,
    _id: false,
  }],
  submitted: [{
    problemId: String,
    problemName: String,
    _id: false,
  }],
  streak: Number,
  lastDateCompleted: String,
}, { versionKey: false });

const Users = mongoose.model('codybot', usersSchema);

module.exports = Users;
