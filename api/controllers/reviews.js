const express = require("express");

const reviewsRouter = express.Router();
const Review = require("../models/review.js");

// index
reviewsRouter.get("/", async (req, res) => {
  const reviews = await Review.find({}).exec();
  res.status(200).json(reviews);
});

module.exports = reviewsRouter;
