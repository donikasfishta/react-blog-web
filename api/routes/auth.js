// To create router we can use express
const router = require("express").Router();
// In auth we are going to use models User
// const { model } = require("mongoose")
const User = require("../models/User");
// Library to hash our password
const bcrypt = require("bcrypt");
// register
// If we are creating something post method
// We use async because we have to wait from database return of response
router.post("/register", async (req, res) => {
  // When we use async we use try and catch block
  try {
    // Hide our password, we can write any number
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    // req.body it will take everything inside that request
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });
    // save() is coming form mongoose
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    // status 500 error somthing with database
    res.status(500).json(err);
  }
});

// LOgin
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(400).json("Wrong credentials!");

    const validated = await bcrypt.compare(req.body.password, user.password);
    !validated && res.status(400).json("Wrong credentials!");

    // This wont show the password in Postman app
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
