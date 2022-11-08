var express = require('express');
var router = express.Router();

// Require controller modules.
var api_controller = require('../controllers/api');
var motels_controller = require('../controllers/motels');

/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);

/// Motels ROUTES ///
// POST request for creating a Motels.
router.post('/motels', motels_controller.motels_create_post);

// DELETE request to delete Motels.
router.delete('/motels/:id', motels_controller.motels_delete);

// PUT request to update Motels.
router.put('/motels/:id', motels_controller.motels_update_put);

// GET request for one Motels.
router.get('/motels/:id', motels_controller.motels_detail);

// GET request for list of all Motels items.
router.get('/motels', motels_controller.motels_list);

module.exports = router;