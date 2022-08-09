const express = require("express");
const BookRouter = require("./bookRouter");
const StudentRouter = require("./studentRouter");

const AppRouter = express.Router();

AppRouter.use("/student", StudentRouter);
AppRouter.use("/book", BookRouter);

module.exports = AppRouter;
