const mongoose = require("mongoose");
const express = require("express");

require("dotenv").config();

const app = express();

//* Routes
const orderRoutes = require("./routes/orders.js");

//* Middleware
app.use(express.json()); //? This allows us to access the req data from the req handler

//* routes
app.use("/api/orders", orderRoutes);

//* Print the request type and path
app.use((req) => {
  console.log(req.path, req.method);
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

module.exports = mongoose; //? Export the mongoose connection for use in other files
