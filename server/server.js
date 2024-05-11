const mongoose = require("mongoose");
const express = require("express");

require("dotenv").config();

const app = express();

//* Middleware
app.use(express.json()); //? This allows us to access the req data from the req handler

//* Console log the request type and path
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("listening on port 5000");
    });
  })
  .catch((error) => {
    console.log(error);
  });

module.exports = mongoose; // Export the mongoose connection for use in other files
