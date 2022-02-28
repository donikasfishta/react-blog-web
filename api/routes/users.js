// To create router we can use express
const router = require("express").Router();

const User = require("../models/User");
const Post = require("../models/Post");
// Library to hash our password
const bcrypt = require("bcrypt");

// Update
// If we are creating something post method
// We use async because we have to wait from database return of response
// we use put method to update
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          //   Update my user
          $set: req.body,
        },
        // This will help us to se updated version in Postman app
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      // status 500 error somthing with database
      res.status(500).json(err);
    }
  } else {
    //  401 status you are not allowed
    res.status(401).json("You can update only your account");
  }
});

// Delete
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      // This grabs all the post of person that we are going to delete
      const user = await User.findById(req.params.id);
      try {
        //   This delete the posts of account
        await Post.deleteMany({ username: user.username });
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted..");
      } catch (err) {
        // status 500 error somthing with database
        res.status(500).json(err);
      }
    } catch (err) {
      res.status(404).json("User not found!");
    }
  } else {
    //  401 status you are not allowed
    res.status(401).json("You can delete only your account");
  }
});

//Get USer
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
