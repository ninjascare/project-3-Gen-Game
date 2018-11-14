const User = require("../models/User");
const VideoGame = require("../models/VideoGame");

const videoGamesController = {
  index: (req, res) => {
    User.find({})
      .populate("games")
      .then(games => {
        res.send(games);
      });
  }
};

module.exports = videoGamesController;
