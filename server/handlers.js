/* eslint-disable object-shorthand */
const { Problems, Users } = require('../database/models/schemas');

module.exports = {
  problems: () => Problems.find({}).sort({ timestamp: 'desc' }),
  problem: ({ params }) => Problems.findOne(params),
  comments: () => 'you would normally put a db query here',
  createProblem: ({ body }) => {
    const newProblem = new Problems({
      name: body.name,
      prompt: body.prompt,
      examples: body.examples,
      constraints: body.constraints,
      tags: body.tags,
      difficulty: body.difficulty,
      rating: body.rating,
      numRatings: body.numRatings,
      timestamp: new Date(Date.now()),
      author: body.author,
    });

    return Problems.create(newProblem);
  },

  addProblemToUser: (userId, problemObj) => Problems.findOneAndUpdate({
    username: userId,
  }, {
    $push: {
      submitted: problemObj,
    },
  }),

  updateRating: (problemId, ratingsObj) => Problems.findOneAndUpdate(problemId, ratingsObj, {
    new: true,
  }),

  reportProblem: (problemId, reportObj) => Problems.findOneAndUpdate(problemId, reportObj, {
    new: true,
  }),

  modifyProblem: ({ params, body }) => Problems.findOneAndUpdate(params, body, { new: true }),

  getUserData: ({ userID }) => Users.findOne({ username: userID }),

  createUser: (params) => Users.create({
    username: params.username,
    firstName: params.first,
    lastName: params.last,
    email: params.email,
    problems: [],
    submitted: [],
    streak: 0,
    lastDateCompleted: 0,
  }),

  updateStreak: ({ userID }, streakObj) => Users.findOneAndUpdate({
    username: userID,
  }, streakObj, { new: true }),
};
