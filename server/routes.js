const handlers = require('./handlers');

module.exports.problems = (req, res) => {
  handlers.problems(res, req)
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json(err));
};

module.exports.problem = (req, res) => {
  handlers.problem(res, req)
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
