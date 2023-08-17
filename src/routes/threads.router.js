const express = require("express");

const threadsController = require("../controllers/threads.controller");

const { checkVerify, moveLogin } = require("../../src/utils/token.verify");

const threadsRouter = express.Router();

threadsRouter.get(
  "/set",
  [checkVerify, moveLogin],
  threadsController.threadSet
);

threadsRouter.post(
  "/upload",
  [checkVerify, moveLogin],
  threadsController.threadCreate
);

threadsRouter.put(
  "/modify",
  [checkVerify, moveLogin],
  threadsController.threadModify
);

threadsRouter.delete(
  "/delete",
  [checkVerify, moveLogin],
  threadsController.threadDelete
);

threadsRouter.get("/list", threadsController.threadList);

module.exports = { threadsRouter };
