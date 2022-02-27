// Creating our express server
const express = require("express");

// Creating app
const app = express();

const dotenv = require("dotenv");
const mongoose = require("mongoose");

// Configuration for env file
dotenv.config();
mongoose
  .connect(process.env.MONGO_DB, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    //useCreateIndex: true,
  })
  .then(console.log("Connected to MONGODB"))
  .catch((err) => {
    console.log(err);
  });

// try in web browser
app.use("/", (req, res) => {});

// To use that we should listen to any port

app.listen("5050", () => {
  console.log("backend is running");
});
