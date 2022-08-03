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

// index
reviewsRouter.get("/", async (req, res) => {
  const reviews = await Review.find({}).exec();
  console.log(reviews);
  res.status(200).json(reviews);
});

// create: POST
// 1. Write the endpoint
// 2. Connect review to user, using currentUser -> Review.create({...req.body, userId: req.session.currentUser._id })
reviewsRouter.post("/", (req, res) => {
  // req.body.userId = req.session.currentUser._id;
  console.log(req.body);
  Review.create(req.body).then((review) => {
    console.log(review);
    // res.redirect("/logs");
    res.sendStatus(201);
  });
});

// GET reviews for user: /reivews/me
// Review.find({userId: req.session.currentUser._id})

module.exports = reviewsRouter;
