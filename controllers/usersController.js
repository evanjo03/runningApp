const db = require("../models");

function generateId(object) {
  object.id = Date.now();
  return object;
}

// Defining methods for the booksController
module.exports = {
  findAll: function (req, res) {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  addActivity: function (req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, { $push: { activities: generateId(req.body) } }, {new : true } )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeActivity: function (req, res) {
    console.log(req.params.id)
    db.User
      .findOneAndUpdate({ _id: req.params.id }, { $pull: { activities: { "id" : req.params.activityId } } }, { safe: true, new: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
