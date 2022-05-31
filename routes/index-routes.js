const express = require('express');
const siteRoutes = require('./site-routes');
const router = express.Router();

router.use('/', siteRoutes);

module.exports = router;