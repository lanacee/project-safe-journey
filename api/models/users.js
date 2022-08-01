const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    email: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profile_image: String,
    review_id: [String]
})

const User = mongoose.model('User', UserSchema)

module.exports = User