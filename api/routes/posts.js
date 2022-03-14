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
    let counter = 0;
    newPost.views = counter;

    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});
//Sidebar - get most popular posts
router.get("/sidebar", async (req, res) => {
  try {
    const posts = await Post.find({}, null, { sort: { views: -1 }, limit: 4 });
    res.status(200).json({ posts });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/categories", async (req, res) => {
  const q = req.query.q;
  const category = q.charAt(0).toUpperCase() + q.slice(1); // capitalize the first letter of category

  try {
    const categoryPosts = await Post.find({ categories: category });
    if (!categoryPosts) {
      console.log("There is no products with that category.");
    }
    res.status(200).json(categoryPosts);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update post

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
      res.status(401).json("You can update only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete post
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
      res.status(401).json("You can delete only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get Post
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    // Counting views of Post
    if (post.views !== null) {
      counter = post.views += 1;
    }
    post.views = counter;
    await post.save();
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});
// Comment to a Post
router.post("/comment/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    const userComment = req.body.userComment;
    const textComment = req.body.textComment;

    if (userComment && textComment) {
      post.comments.push({
        userComment: userComment,
        textComment: textComment,
      });
    } else if (!userComment || !textComment) {
      console.log("Add all required datas.");
    }
    await post.save();
    res.status(200).json(post.comments);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get ALL Posts, this will help to fetch all te data to client
router.get("/", async (req, res) => {
  // This wil catch the url based on username and category name
  const username = req.query.user;
  const catName = req.query.cat;
  const searchKey = req.query.q;
  try {
    let posts;
    if (searchKey) {
      posts = await Post.find({
        $or: [
          { username: new RegExp(searchKey, "i") },
          { title: new RegExp(searchKey, "i") },
          { desc: new RegExp(searchKey, "i") },
          { categories: new RegExp(searchKey, "i") },
        ],
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
