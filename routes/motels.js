var express = require('express');
const motels_controlers = require('../controllers/motels');
var router = express.Router();

// A little function to check if we have an authorized user and continue on
// or
// redirect to login.
const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
}

/* GET home page. */
router.get('/', motels_controlers.motels_view_all_Page);
/* GET detail motel page */
router.get('/detail', motels_controlers.motels_view_one_Page);
/* GET create costume page */
router.get('/create', motels_controlers.motels_create_Page);
/* GET create update page */
router.get('/update', secured, motels_controlers.motels_update_Page);
/* GET delete costume page */
router.get('/delete', motels_controlers.motels_delete_Page);

module.exports = router;
