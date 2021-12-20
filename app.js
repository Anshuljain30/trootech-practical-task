const express = require("express");
const path = require("path");

const categoryRouter = require("./routes/category");
const productRouter = require("./routes/product");

const db = require("./models/index");

// Initializing Express App
const app = express();

// Parsing Request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routing
app.use("/category", categoryRouter);
app.use("/product", productRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.status(404).json({ message: "Invalid Route" });
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
