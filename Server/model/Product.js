const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
	name: { type: String },
	price: { type: Number },
	tags: { type: String },
    description : { type: String },
    quantity: { type: String },
    imageId: { type: Object },
    company: { type: String }
})


module.exports = mongoose.model( 'Product', productSchema, "products");