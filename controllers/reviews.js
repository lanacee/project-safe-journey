const express = require("express");

const reviewsRouter = express.Router();
const Review = require("../models/review.js");

// const isLoggedIn = (req, res, next) => {
//   if (!req.session.currentUser) {
//     return res.redirect("/login");
//   }
//   req.app.locals.currentUser = req.session.currentUser;
//   next();
// };

// reviewsRouter.use(isLoggedIn);

//////////////////////////// Inserting Reviews into Countries ////////////////////////////

// Get route of all reviews just to store data
reviewsRouter.get("/", async (req, res) => {
  const reviews = await Review.find({}).exec();
  console.log(reviews);
  res.status(200).json(reviews);
});

// index
// this doesn't work for our app because we're not rendering all the reviews on homepage
// only showing reviews for each individual page so changing this to suit that
reviewsRouter.get("/countries/:countryname", async (req, res) => {
  const reviews = await Review.find({ country: req.params.countryname }).exec();
  console.log(reviews);
  res.status(200).json(reviews);
});

// create: POST
// I'm working on putting the new review into the respective country page
reviewsRouter.post("/countries/:countryname", async (req, res) => {
  const newReview = await Review.create({
    user_id: req.session.currentUser._id,
    country: req.params.countryname,
    racism_experience: req.body.racism_experience,
    lgbtqi_experience: req.body.lgbtqi_experience,
    womens_safety: req.body.womens_safety,
    description: req.body.description,
  });
  console.log(newReview);
  res.status(200).json(newReview);
});

// Update Route
// We don't have Id in params since we're using country names
reviewsRouter.put("/my-reviews/edit/:reviewID", async (req, res) => {
  console.log("is this working");
  const updateReview = await Review.findByIdAndUpdate(req.body._id, req.body, {
    new: true,
  }).exec();
  console.log(updateReview);
  res.status(200).json(updateReview);
});

// Delete Route
reviewsRouter.delete("/my-reviews", async (req, res) => {
  const deleteReview = await Review.findByIdAndDelete(req.body._id).exec();
  console.log(deleteReview);
  res.status(200).json(deleteReview);
});

/////////////////////////////////// Storing user specific reviews /////////////////////

// create: POST
// 1. Write the endpoint
// 2. Connect review to user, using currentUser -> Review.create({...req.body, userId: req.session.currentUser._id })
reviewsRouter.post("/", (req, res) => {
  // req.body.userId = req.session.currentUser._id;
  console.log(req.body);
  Review.create(req.body).then((review) => {
    console.log(review);
    // res.redirect("/logs");
    res.status(201).json(review);
  });
});

// GET reviews for user: /reivews/me
// Review.find({userId: req.session.currentUser._id})

module.exports = reviewsRouter;
