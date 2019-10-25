const router = require('express').Router();
const portraitsController = require('./../../../controllers/portraitsController');


// /api/portraits
router.route('/')
    .get(portraitsController.getRandomPortrait)

// router.route('/')
//     .get(portraitsController.getPortrait)

module.exports = router;