/* eslint-disable object-shorthand */
const { Problems, Users } = require('../database/models/schemas');

module.exports = {
  problems: () => Problems.find({}),
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
      timestamp: body.timestamp,
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

  updateRating: (userId, updatedRating) => Problems.findOneAndUpdate({
    username: userId,
  }, updatedRating),

  modifyProblem: ({ params, body }) => Problems.findOneAndUpdate(params, body),

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
