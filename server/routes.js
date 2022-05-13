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

      console.log('ping! in routes.js');

      if (req.params) {
        module.exports.addProblemToUser(req.params, { problemId: data._id, problemName: data.name})
        .then((data) => res.json(data))
        .catch((err) => res.status(500).json(err));
      } else res.json(data)
    })
    .catch((err) => res.status(500).json(err));
};

module.exports.userStats = (req, res) => {

  handlers.getUserData(req.params)
    .then((data) => {
      if ((Date.now() - 86400000) > data.lastDateCompleted.getTime()) {
        handlers.getUserData(data, { streak: 0 })
        .then((data) => res.json('deleted'))
        .catch((err) => res.status(500).json(err));
      } else res.json(data);
    })
    .catch((err) => res.status(500).json(err));
};

module.exports.updateRating = (req, res) => {
  handlers.updateRating(req.params, req.body)
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json(err));
};

module.exports.reportProblem = (req, res) => {
  handlers.reportProblem(req.params, req.body)
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json(err));
};

module.exports.modifyUser = (req, res) => {
  handlers.modifyUser(req.params, req.body)
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json(err));
};

module.exports.modifyProblem = (req, res) => {
  handlers.modifyProblem(req, res)
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json(err));
};
