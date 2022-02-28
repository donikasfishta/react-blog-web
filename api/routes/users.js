// To create router we can use express
const router = require("express").Router();

// In auth we are going to use models User
const User = require("../models/User");

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

module.exports = router;
