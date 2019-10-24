const router = require('express').Router();
const portraitsController = require('./../../../controllers/portraitsController');


// /api/items
router.route('/')
    .get(portraitsController.getPortrait)

module.exports = router;