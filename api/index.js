// Creating our express server
const express = require("express");

// Creating app
const app = express();

const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
const path = require("path");
// Configuration for env file
dotenv.config();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

// This let us to send json object inside body
app.use(express.json());
mongoose
  .connect(process.env.MONGO_DB, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify:true
  })
  .then(console.log("Connected to MONGODB"))
  .catch((err) => {
    console.log(err);
  });

// Creating storage of img
const storage = multer.diskStorage({
  // cb - callback Function it will take care of error
  destination: (req, file, cb) => {
    // second parameter our destination folder
    cb(null, "img");
  },
  filename: (req, file, cb) => {
    // This is the name that we are providing to te file that we save
    cb(null, req.body.name);
  },
});
// Uplade file
const upload = multer({ storage: storage });
// We use single because we going to upload one file
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

// To use that we should listen to any port
app.listen("5000", () => {
  console.log("backend is running");
});
