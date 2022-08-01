require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

// allow cross browser domain calls
const cors = require("cors");
const app = express();
const PORT = process.env.PORT;
const dbURL = process.env.MONGODB_URL;
//whitelist
const whitelist = ["http://localhost:4001"];

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

//app.use(express.urlencoded)
//no longer the above, for react use below
app.use(express.json());
app.use(
  cors({
    origin: (origin, cb) => {
      if (whitelist.indexOf(origin) !== -1) {
        cb(null, true);
      } else {
        cb(new Error());
      }
      console.log(origin);
    },
  })
);

// add our Controller
// app.use our review controller

mongoose.connect(dbURL, () => {
  console.log("Connected to review db");
});

app.listen(PORT, () => {
  console.log("Server started on Port:", PORT);
});
