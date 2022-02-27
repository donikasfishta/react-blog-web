// To create router we can use express
const router = require("express").Router();

// In auth we are going to use models User

const User = require("../models/User");

// Register
// If we are creating something post method
// We use async because we have to wait from database return of response
router.post("/register", async (req, res) => {
  try {
    // req.body it will take everything inside that request
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    // save() is coming form mongoose
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    // status 500 error somthing with database
    res.status(500).json(err);
  }
});

// Login

module.exports = router;
