const router = require('express').Router();

const itemsRoutes = require('./itemsRoutes');
const leaderboardRoutes = require('./leaderboardRoutes');
const portraitsRoutes = require('./portraitsRoutes');

// /api  prepended to every route declared in here


// /api/items
router.use('/items', itemsRoutes);

// /api/leaderboard
router.use('/leaderboard', leaderboardRoutes);

// /api/portraits
router.use('/portraits', portraitsRoutes);

module.exports = router;
