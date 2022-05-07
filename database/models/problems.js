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
  _id: false,
});

const Problems = mongoose.model('codybot', problemSchema);

module.exports = Problems;
