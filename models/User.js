const mongoose = require("../db/connections");
const Schema = mongoose.Schema;

const User = new Schema({});

module.exports = mongoose.model("User", User);
