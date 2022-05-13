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
  parameters: [String],
  constraints: [String],
  tags: [String],
  difficulty: String,
  rating: {
    1: Number,
    2: Number,
    3: Number,
    4: Number,
    5: Number,
    _id: false,
  },
  reportedCount: Number,
  timestamp: String,
  author: String,
}, { versionKey: false });

const usersSchema = mongoose.Schema({
  userId: String,
  firstName: String,
  lastName: String,
  email: String,
  problems: [{
    problemId: String,
    problemName: String,
    isComplete: { type: Boolean, default: false },
    _id: false,
  }],
  submitted: [{
    problemId: String,
    problemName: String,
    _id: false,
  }],
  streak: { type: Number, default: 0 },
  lastDateCompleted: { type: Date, default: new Date() },
}, { versionKey: false });

const Problems = mongoose.model('codybot', problemSchema);
const Users = mongoose.model('users', usersSchema);

module.exports = { Problems, Users };
