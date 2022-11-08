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
exports.motels_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Motels();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"motelRatings":"3.5 Star", "motelCost":100, "motelFacility":"Swimming pool"}
    document.motelRatings = req.body.motelRatings;
    document.motelCost = req.body.motelCost;
    document.motelFacility = req.body.motelFacility;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle Motels delete form on DELETE.
exports.motels_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Motels delete DELETE ' + req.params.id);
};

// Handle Motels update form on PUT.
exports.motels_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Motels update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.motels_view_all_Page = async function (req, res) {
    try {
        theMotels = await Motels.find();
        res.render('motels', { title: 'Motels Search Results', results: theMotels });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};