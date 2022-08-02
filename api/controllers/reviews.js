const express = require("express");

const reviewsRouter = express.Router();
const Review = require("../models/review.js");

// index
reviewsRouter.get("/", async (req, res) => {
  const reviews = await Review.find({}).exec();
  res.status(200).json(reviews);
});

// create: POST
// 1. Write the endpoint
// 2. Connect review to user, using currentUser -> Review.create({...req.body, userId: req.session.currentUser._id })

// GET reviews for user: /reivews/me
// Review.find({userId: req.session.currentUser._id})

module.exports = reviewsRouter;
