const Problems = require('../database/models/problems');

module.exports = {
  problems: () => Problems.find({}),
  problem: () => 'you would normally put a db query here',
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
  // getUserData: (userId) => {
  //   // query DB here with userID
  // },
};
