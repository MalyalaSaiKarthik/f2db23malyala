var Motels = require('../models/motels');

// List of all Motels
exports.motels_list = async function (req, res) {
    try {
        theMotels = await Motels.find();
        res.send(theMotels);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// for a specific Motels.
exports.motels_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Motels detail: ' + req.params.id);
};

// Handle Motels create on POST.
exports.motels_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Motels create POST');
};

// Handle Motels delete form on DELETE.
exports.motels_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Motels delete DELETE ' + req.params.id);
};

// Handle Motels update form on PUT.
exports.motels_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Motels update PUT' + req.params.id);
};