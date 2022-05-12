/* eslint-disable */
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
    .then((data) => {
      if (req.params) {
        module.exports.addProblemToUser(req.params, { problemId: data._id, problemName: data.name})
        .then((data) => res.json(data))
        .catch((err) => res.status(500).json(err));
      } else res.json(data)
    })
    .catch((err) => res.status(500).json(err));
};

module.exports.userStats = (req, res) => {
  // username is the google identifier ID that is unique to each google account
  // - we can use it to identify a user
  const { username, email, first, last } = req.params;
  handlers.getUserData(req.params)
    .then((data) => {
      // one day 86400000
      if (!data) {
        handlers.createUser(req.params)
        .then((data) => res.json(data))
        .catch((err) => res.status(500).json(err));
      } else {
        const date = Date.now();
        // the amount of milliseconds in 24 hours
        if ((date - data.lastDateCompleted) >= 86400000) {
          handlers.updateStreak(req.params, { streak: 0 })
          .then((newData) => {
            res.json(newData);
          })
          .catch((err) => res.status(500).json(err));
        } else {
          res.json(data);
        }
      }
    })
    .catch((err) => res.status(500).json(err));
};

module.exports.updateRating = (req, res) => {
  handlers.updateRating(req.params, req.body)
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json(err));
};

module.exports.reportProblem = (req, res) => {
  handlers.updateRating(req.params, req.body)
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json(err));
};

module.exports.modifyProblem = (req, res) => {
  handlers.modifyProblem(req, res)
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json(err));
};
