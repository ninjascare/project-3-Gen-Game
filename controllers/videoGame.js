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
  
};

module.exports = videoGamesController;
