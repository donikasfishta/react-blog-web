const mongoose = require("mongoose");
// Create User Schema
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    profilePicture: {
      type: String,
      default: "",
    },
  },
  //   this creates the date
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
