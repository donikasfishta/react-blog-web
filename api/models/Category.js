// import mongoose
const mongoose = require("mongoose");

// Create User Schema
const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  //   this creates the date
  { timestamps: true }
);

module.exports = mongoose.model("Category", CategorySchema);
