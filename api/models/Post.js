// import mongoose
const mongoose = require("mongoose");

// Create User Schema
const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
      required: false,
    },
  },
  //   this creates the date
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
