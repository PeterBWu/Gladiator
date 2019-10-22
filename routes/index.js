const router = require('express').Router();

const apiRoutes = require("./apiRoutes")

// prepends /api to all routes
router.use("/api",apiRoutes)


module.exports = router