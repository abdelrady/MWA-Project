const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
    name: String,
    encoding: String,
    mimetype: String,
    data: Buffer,
    size: Number
})

module.exports = mongoose.model('Image', imageSchema, "images");
