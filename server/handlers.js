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

  modifyProblem: ({ params, body }) => Problems.findOneAndUpdate(params, body),

  getUserData: ({ username }) => Users.findOne({ username: username }),
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
  modifyUsers: ({ username }, query) => {
    Users.findOneAndUpdate({ username: username }, query, { new: true });
  },
};
