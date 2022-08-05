require("dotenv").config();
console.log("Hello");
const mongoose = require("mongoose");

const Review = require("../models/review.js");
const User = require("../models/users")
const data = require("./reviews.json");

const dbURL = process.env.MONGODB_URL;

mongoose.connect(dbURL, async () => {
  console.log("Connected to reviews db");
  const check = await User.findOne()
  console.log("Resetting reviews collection");
  await Review.collection.drop();
  console.log("REview collection dropped");
  const newUser = data.map((data) => {
    data.user_id= check._id
    return data
  })
  console.log(newUser);
  console.log("Inserting seed data");
  const insertedReviews = await Review.insertMany(newUser);
  console.log("Rview inserted");
  console.log(insertedReviews);

  mongoose.connection.close();
});
