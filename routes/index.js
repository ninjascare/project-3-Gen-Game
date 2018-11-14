const express = require("express");
const router = express.Router();
const usersController = require("../controllers/user");
const videoGamesController = require("../controllers/videoGame");

router.get("/api/users", usersController.index);
router.post("/api/users/", usersController.create);
router.get("/api/users/:userId", usersController.show);
router.patch("/api/users/:userId", usersController.update);
// router.delete("/api/users/:userId", usersController.delete);

module.exports = router;
