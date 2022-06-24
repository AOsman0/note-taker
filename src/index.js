// import express
const express = require("express");
const path = require("path");

console.log("hello node");

// define routes
const router = require("./routes/index");

// create a new app using express as function
const app = express();
// declare a port to connect my server
const PORT = process.env.PORT || 4000;

// the 2 things every server requires
// middlewares
// and the path to HTML file
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));
app.use(router);

// connect my app to port and listen to request
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
