const router = require('express').Router();
const leaderboardController = require('./../../../controllers/leaderboardController');


// /api/items
router.route('/')
    .get(leaderboardController.getLeaderboard);

    router.route('/post')
    .post(leaderboardController.newChampion);
module.exports = router;