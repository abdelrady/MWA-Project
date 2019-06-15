const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
	name: { type: String },
	isActive: { type: Boolean, default: true }
})

module.exports = mongoose.model( 'User', userSchema);