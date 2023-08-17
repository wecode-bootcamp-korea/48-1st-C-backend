const express = require("express");

const likesController = require("../controllers/likes.controller");

const likesRouter = express.Router();

const { checkVerify, moveLogin } = require("../../src/utils/token.verify");

likesRouter.post("/likeOn", likesController.likeon);
likesRouter.delete("/likeOff", likesController.likeoff);

module.exports = { likesRouter };
