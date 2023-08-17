const express = require("express");

const { authRouter } = require("./user.router");
const { threadsRouter } = require("./threads.router");
const { likesRouter } = require("./likes.router");


const routes = express.Router();

routes.use("/user", authRouter);
routes.use("/thread", threadsRouter);
routes.use("/like", likesRouter);

module.exports = { routes };
