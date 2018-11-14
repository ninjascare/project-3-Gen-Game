const User = require("../models/User");
const VideoGame = require("../models/VideoGame");

const usersController = {
  index: (req, res) => {
    User.find({}).then(users => {
      res.send(users);
    });
  },
  show: (req, res) => {
    const userId = req.params.userId;
    User.findById(userId)
      .populate("games")
      .then(user => {
        res.send(user);
      });
  },
  create: (req, res) => {
    User.create(req.body).then(newUser => {
      res.send(newUser);
    });
  },
  update: (req, res) => {
    const userId = req.params.userId;
    User.findByIdAndUpdate(userId, req.body).then(updatedUser => {
      updatedUser.save();
      res.send(updatedUser);
    });
  },
  delete: (req, res) => {
    const userId = req.params.userId;
    User.findByIdAndRemove(userId).then(() => {
      res.send(200);
    });
  }
};

module.exports = usersController;
