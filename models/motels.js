const mongoose = require("mongoose")

const motelsSchema = mongoose.Schema({
    motelRatings: String,
    motelCost: { type: Number, min: 100, max: 10000 },
    motelFacility: { type: String }
})

module.exports = mongoose.model("motels", motelsSchema)