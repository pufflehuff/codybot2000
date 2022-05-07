const handlers = require('./handlers');

module.exports.problems = (res, req) => {
  handlers.problems(res, req)
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json(err));
};
