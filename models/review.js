const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  user_id: { type: String },
  country: String,
  racism_experience: { type: Number, min: 0, max: 5, default: 0 },
  lgbtqi_acceptance: { type: Number, min: 0, max: 5, default: 0 },
  womens_safety: { type: Number, min: 0, max: 5, default: 0 },
  description: String,
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
