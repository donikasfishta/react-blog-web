// Creating our express server
const express = require("express");

// Creating app
const app = express();

const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");

// Configuration for env file
dotenv.config();

// This let us to send json object inside body
app.use(express.json());
mongoose
  .connect(process.env.MONGO_DB, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then(console.log("Connected to MONGODB"))
  .catch((err) => {
    console.log(err);
  });

app.use("/api/auth", authRoute);

// To use that we should listen to any port
app.listen("5000", () => {
  console.log("backend is running");
});
