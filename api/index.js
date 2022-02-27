// Creating our express server
const express = require("express");

// Creating app
const app = express();

// try in web browser
app.use("/", (req, res) => {
  console.log("Hey this is Kujtim");
});

// To use that we should listen to any port

app.listen("5050", () => {
  console.log("backend is running");
});
