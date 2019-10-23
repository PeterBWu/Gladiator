const router = require('express').Router();
const itemsController = require('../../../controllers/itemsController');


// /api/items
router.route('/')
    .get(itemsController.getRandomItem)
    // .get(itemsController.getItem)

module.exports = router;