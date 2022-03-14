const mongoose = require("mongoose");
// Create Post Schema

const commentSchema = new mongoose.Schema(
  {
    userComment: {
      type: String,
      required: true,
    },
    textComment: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
  { _id: false }
);

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
      type: String,
      required: true,
    },
    views: {
      type: Number,
      required: true,
    },
    comments: [commentSchema],
  },
  //   this creates the date
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
