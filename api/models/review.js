const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema({
    location: {type: String, required: true},
    racism_experience: { type: Number, max: 5, min: 0 },
    lgbtqi_acceptance: { type: Number, max: 5, min: 0 },
    womens_safety: { type: Number, max: 5, min: 0 },
    images: [String],
    description: String,
    user_id: {type: String, unique: true}
},
    { timestamps: true }
)

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review