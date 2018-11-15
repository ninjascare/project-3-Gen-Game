const express = require("express");
const router = express.Router();
const usersController = require("../controllers/user");
const videoGamesController = require("../controllers/videoGame");

router.get("/api/users", usersController.index);
router.post("/api/users/", usersController.create);
router.get("/api/users/:userId", usersController.show);
router.patch("/api/users/:userId", usersController.update);
router.delete("/api/users/:userId", usersController.delete);


router.get('/api/users/:userId/videogames', videoGamesController.index)
router.post('/api/users/:userId/videogames', videoGamesController.create)
router.get('/api/videogames/:videogamesId', videoGamesController.show)
router.patch('/api/videogames/:videogamesId', videoGamesController.update)
// router.delete('/api/videogames/:videogamesId', videoGamesController.delete)


module.exports = router;
