const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema({
    user_id: { type: String, unique: true },
    location: { type: String, required: true },
    racism_experience: Boolean,
    lgbtqi_acceptance: Boolean,
    womens_safety: Boolean,
    images: [String],
    description: String,
    date: Date
},
    { timestamps: true }
)

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review