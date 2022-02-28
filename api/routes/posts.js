// To create router we can use express
const router = require("express").Router();

const User = require("../models/User");
const Post = require("../models/Post");

// Create new post
// If we are creating something post method
// We use async because we have to wait from database return of response

router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
