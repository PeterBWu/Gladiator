const router = require('express').Router();
const leaderboardController = require('./../../../controllers/leaderboardController');


// /api/items
router.route('/')
    .get(leaderboardController.getLeaderboard)
    .get(leaderboardController.currentChamp)
    .get(leaderboardController.randomChamps)
    .post(leaderboardController.newChampion)

module.exports = router;