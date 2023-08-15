const express = require("express");

const threadsController = require("../controllers/threads.controller");

const threadsRouter = express.Router();

//thread 작성
threadsRouter.post("/contentup", threadsController.threadUp);

//thread 수정
threadsRouter.put("/contentmod", threadsController.threadMod);

//thread 삭제
threadsRouter.delete("/content-delete", threadsController.threadDelete);


module.exports = {threadsRouter};
