const likeDao = require("../models/likes.dao");

const likeButtonOn = async (thread_id, user_id) => {
  return await likeDao.likeOnByUser(thread_id, user_id);
};

const likeButtonOff = async (thread_id, user_id) => {
  return await likeDao.likeOffByUser(thread_id, user_id);
};

module.exports = { likeButtonOn, likeButtonOff };
