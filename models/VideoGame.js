const mongoose = require("../db/connections");
const Schema = mongoose.Schema;

const VideoGame = new Schema({
  name: String,
  image: String,
  platform: String,
  year: Number
});

module.exports = mongoose.model("VideoGame", VideoGame);
