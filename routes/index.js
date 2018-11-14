const express = require("express");
const router = express.Router();
const usersController = require('../controllers/user')
const videoGamesController = require('../controllers/videoGame')

router.get("/api/users", usersController.index);

module.exports = router;
