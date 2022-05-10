const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
  username: String,
  completed: [{
    problemId: String,
    problemName: String,
    timeCompleted: String,
    _id: false,
  }],
  submitted: [{
    problemId: String,
    problemName: String,
    _id: false,
  }],
  streak: Number,
  versionKey: false,
});

const Users = mongoose.model('codybot', usersSchema);

module.exports = Users;
