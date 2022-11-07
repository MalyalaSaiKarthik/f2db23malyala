var motels = require('../models/motels'); 
 
// List of all motels

exports.motels_list = async function(req, res) { 
    try{ 
        themotels = await motels.find(); 
        res.send(themotels); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};
 /*
// for a specific motels. 
exports.motels_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: motels detail: ' + req.params.id); 
}; */
 
// Handle motels create on POST. 
exports.motels_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: motels create POST'); 
}; 
 
// Handle motels delete form on DELETE. 
// Handle motels delete on DELETE. 
exports.motels_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await motels.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 

 /*
// Handle motels update form on PUT. 
exports.motels_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: motels update PUT' + req.params.id); 
}; */

exports.motels_view_all_Page = async function(req, res) { 
    try{ 
        themotels = await motels.find(); 
        res.render('motels', { title: 'motels Search Results', results: themotels }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};
 
// Handle motels create on POST. 
exports.motels_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new motels(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"motels_type":"goat", "motelCost":12, "size":"large"} 
    document.motelsRatings = req.body.motelsRatings;
    console.log(document.motelsRatings)
    document.motelsmotelCost = req.body.motelsmotelCost; 
    document.motelsFacility = req.body.motelsFacility; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};

exports.motels_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await motels.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 


exports.motels_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
    ${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await motels.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.motelRatings)  
               toUpdate.motelRatings = req.body.motelRatings; 
        if(req.body.motelCost) toUpdate.motelCost = req.body.motelCost; 
        console.log('here');
        if(req.body.motelFacility) toUpdate.motelFacility = req.body.motelFacility; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 
// Handle a show one view with id specified by query 
exports.motels_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await motels.findById( req.query.id) 
        res.render('motelsdetail',  
{ title: 'motels Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
 // Handle building the view for creating a motels. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.motels_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('motelscreate', { title: 'motels Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle building the view for updating a motels. 
// query provides the id 
exports.motels_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await motels.findById(req.query.id) 
        res.render('motelsupdate', { title: 'motels Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle a delete one view with id from query 
exports.motels_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await motels.findById(req.query.id) 
        res.render('motelsdelete', { title: 'motels Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
};