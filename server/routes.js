const handlers = require('./handlers');

module.exports.problems = (req, res) => {
  handlers.problems(res, req)
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json(err));
};

module.exports.problem = (req, res) => {
  handlers.problem(req)
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json(err));
};

module.exports.comments = (req, res) => {
  handlers.comments(res, req)
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json(err));
};

module.exports.createProblem = (req, res) => {
  handlers.createProblem(req, res)
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json(err));
};

// module.exports.userStats = (req, res) => {
//   // username is the google identifier ID that is unique to each google account
//   // - we can use it to identify a user
//   // const { username } = req.params;
//   // handlers.getUserData(req, res)
//   //   .then((data) => res.json(data))
//   //   .catch((err) => res.status(500).json(err));
// };

module.exports.modifyProblem = (req, res) => {
  handlers.modifyProblem(req, res)
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json(err));
};
