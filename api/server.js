require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const mongoDBSession = require("connect-mongodb-session");
// allow cross browser domain calls
const reviewsRouter = require("./controllers/reviews");
const usersRouter = require("./controllers/user");

const app = express();
const PORT = process.env.PORT;
const dbURL = process.env.MONGODB_URL;
console.log(PORT, dbURL);
const MongoDBStore = mongoDBSession(session);
const sessionStore = new MongoDBStore({
  uri: dbURL,
  collection: "sessions",
});

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    cookie: {
      maxAge: 7 * 24 * 60 * 60 * 1000,
    },
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// add our Controller
app.use("/reviews", reviewsRouter);
app.use("/users", usersRouter);

mongoose.connect(dbURL, () => {
  console.log("Connected to review db");
});

app.listen(PORT, () => {
  console.log("Server started on Port:", PORT);
});
