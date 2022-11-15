var express = require('express');
const motels_controlers = require('../controllers/motels');
var router = express.Router();

/* GET home page. */
router.get('/', motels_controlers.motels_view_all_Page);
/* GET detail motel page */
router.get('/detail', motels_controlers.motels_view_one_Page);

module.exports = router;
