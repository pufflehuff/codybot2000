const mongoose = require('mongoose');

const problemSchema = mongoose.Schema({
  name: String,
  prompt: String,
  examples: [{
    input: String,
    output: String,
    explanation: String,
    _id: false,
  }],
  constraints: [String],
  tags: [String],
  difficulty: String,
  rating: Number,
  numRatings: Number,
  timestamp: String,
  author: String,
}, { versionKey: false });

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
  lastDateCompleted: Number,
}, { versionKey: false });

const Problems = mongoose.model('problems', problemSchema);
const Users = mongoose.model('users', usersSchema);

module.exports = { Problems, Users };
