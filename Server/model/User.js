const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
	firstName: { type: String },
	lastName: { type: String },
	email: { type: String },
	password: { type: String },
	isAdmin: { type: Boolean, default: false },
	cartItems: { type: Array }
})

module.exports = mongoose.model( 'User', userSchema);