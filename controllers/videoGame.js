const User = require("../models/User");
const VideoGame = require("../models/VideoGame");

const videoGamesController = {
  index: (req, res) => {
    const userId = req.params.userId;
    User.findById(userId)
      .populate("games")
      .then(user => {
        res.send(user.games);
      });
  },
  show: (req, res) => {
    const videogamesId = req.params.videogamesId;
    VideoGame.findById(videogamesId).then(game => {
      res.send(game);
    });
  },
  create: (req, res) => {
    const userId = req.params.userId;
    User.findById(userId).then(user => {
      VideoGame.create(req.body).then(newGame => {
        user.games.push(newGame);
        user.save();
        res.send(newGame);
      });
    });
  }
};

module.exports = videoGamesController;
