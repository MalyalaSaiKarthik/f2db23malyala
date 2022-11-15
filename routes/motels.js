var express = require('express');
const motels_controlers = require('../controllers/motels');
var router = express.Router();

/* GET home page. */
router.get('/', motels_controlers.motels_view_all_Page);
/* GET detail motel page */
router.get('/detail', motels_controlers.motels_view_one_Page);
/* GET create costume page */
router.get('/create', motels_controlers.motels_create_Page);
/* GET create update page */
router.get('/update', motels_controlers.motels_update_Page);
/* GET delete costume page */
router.get('/delete', motels_controlers.motels_delete_Page);

module.exports = router;
