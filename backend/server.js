const express = require("express");
require("dotenv").config();
const mementoRoutes = require("./routes/mementoRoutes");
const mongoose = require("mongoose");

const app = express();

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to DB");
    app.listen(process.env.PORT, () => {
      console.log("Server is running on port " + process.env.PORT);
    });
  })
  .catch(() => {
    console.log("Failed to connect to DB");
  });

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use(express.json());

app.use("/", mementoRoutes);
