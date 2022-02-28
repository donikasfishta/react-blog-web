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
// Update Post
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    // Checks username
    if (post.username === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          //   To see our updated post in Postman app
          { new: true }
        );
        res.status(200).json(updatedPost);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(404).json("You can update only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
// Delete Posst

router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    // Checks username
    if (post.username === req.body.username) {
      try {
        await post.delete();
        res.status(200).json("Post has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(404).json("You can delete only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get Post
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get ALL Posts, this will help to fetch all te data to client
router.get("/", async (req, res) => {
  // This wil catch the url based on username and category name
  const username = req.query.user;
  const catName = req.query.cat;
  try {
    let posts;
    if (username) {
      posts = await Post.find({ username: username });
    } else if (catName) {
      posts = await Post.find({
        categories: {
          // This will find only categories that are in array
          $in: [catName],
        },
      });
    } else {
      posts = await Post.find();
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
