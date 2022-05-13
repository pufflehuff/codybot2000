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
      rating: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
      },
      timestamp: new Date(Date.now()),
      parameters: body.parameters,
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

  modifyUser: (userId, userObj) => Users.findOneAndUpdate(userId, userObj, { new: true }),

  modifyProblem: ({ params, body }) => Problems.findOneAndUpdate(params, body, { new: true }),

  getUserData: (params, query) => {
    if (query) {
      return Users.findOneAndUpdate(params, query);
    }

    return Users.findOneAndUpdate(params.userId, {
      userId: params.userId,
      email: params.email,
      firstName: params.first,
      lastName: params.last,
    }, {
      upsert: true,
      new: true,
      setDefaultsOnInsert: true,
    });
  },

  updateStreak: ({ userID }, streakObj) => Users.findOneAndUpdate({
    username: userID,
  }, streakObj, { new: true }),
};
