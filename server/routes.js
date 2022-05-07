const handlers = require('./handlers');

module.exports.problems = (res, req) => {
  handlers.problems(res, req)
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json(err));
};

module.exports.problem = (res, req) => {
  handlers.problem(res, req)
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json(err));
};

module.exports.comments = (res, req) => {
  handlers.comments(res, req)
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json(err));
};
