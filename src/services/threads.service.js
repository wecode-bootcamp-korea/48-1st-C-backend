const threadsDao = require("../models/threads.dao");

const threadSet = async (user_id) => {
  return await threadsDao.setThread(user_id);
};

const threadCreate = async (user_id, content) => {
  await threadsDao.createThread(user_id, content);
};

const threadModify = async (content, id) => {
  await threadsDao.modifyThread(content, id);
};

const threadDelete = async (id) => {
  await threadsDao.deleteThread(id);
};

const threadList = async () => {
  return await threadsDao.listThread();
};

module.exports = {
  threadSet,
  threadCreate,
  threadModify,
  threadDelete,
  threadList
};
