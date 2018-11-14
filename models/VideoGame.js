const mongoose = require("../db/connections");
const Schema = mongoose.Schema;

const VideoGame = new Schema({});

module.exports = mongoose.model("VideoGame", VideoGame);
