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
exports.motels_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Motels.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
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
exports.motels_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await Motels.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle Motels update form on PUT.
exports.motels_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Motels.findById(req.params.id)
        // Do updates of properties
        if (req.body.motelRatings) toUpdate.motelRatings = req.body.motelRatings;
        if (req.body.motelCost) toUpdate.motelCost = req.body.motelCost;
        if (req.body.motelFacility) toUpdate.motelFacility = req.body.motelFacility;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
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

// Handle a show one view with id specified by query
exports.motels_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await Motels.findById(req.query.id)
        res.render('moteldetail', { title: 'Motel Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a motel.
// No body, no in path parameter, no query.
// Does not need to be async
exports.motels_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('motelcreate', { title: 'Motel Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a costume.
// query provides the id
exports.motels_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await Motels.findById(req.query.id)
        res.render('motelupdate', { title: 'Motel Update', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle a delete one view with id from query
exports.motels_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await Motels.findById(req.query.id)
        res.render('moteldelete', { title: 'Motel Delete', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};