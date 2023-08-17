const express = require('express');

const commentsController = require('../controllers/comments.controller');

const {checkVerify, moveLogin} = require("../../src/utils/token.verify");

const commentsRouter = express.Router();

commentsRouter.post(
    "/contentup",
    [checkVerify, moveLogin],
    commentsController.commentCreate
);

commentsRouter.get(
    "/list",
    [checkVerify, moveLogin],
    commentsController.commentList
);

module.exports = {commentsRouter};