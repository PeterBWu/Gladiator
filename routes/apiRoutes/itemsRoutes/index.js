const router = require('express').Router();
const itemsController = require('../../../controllers/itemsController');


// /api/items
router.route('/rand')
    .get(itemsController.getRandomItem)
    // .get(itemsController.getItem)
router.route("/rand/:count")
    .get(itemsController.getRandomItems)

module.exports = router;