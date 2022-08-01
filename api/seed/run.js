require("dotenv").config();
console.log("Hello");
const mongoose = require("mongoose");

const Review = require("../models/review.js");
const data = require("./reviews.json");

const dbURL = process.env.MONGODB_URL;

mongoose.connect(dbURL, async () => {
  console.log("Connected to reviews db");

  console.log("Resetting reviews collection");
  await Review.collection.drop();
  console.log("REview collection dropped");

  console.log("Inserting seed data");
  const insertedReviews = await Review.insertMany(data);
  console.log("Rview inserted");
  console.log(insertedReviews);

  mongoose.connection.close();
});
