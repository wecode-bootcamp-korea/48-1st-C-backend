const express = require("express");

const { authRouter } = require("./user.router");

const routes = express.Router();

routes.use("/user", authRouter);

module.exports = { routes };
