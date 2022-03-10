const mongoose = require("mongoose");
// Create Post Schema
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
      required: false,
    },
    username: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
      required: false,
    },
    views: {
      count: Number,
    },
  },
  //   this creates the date
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
