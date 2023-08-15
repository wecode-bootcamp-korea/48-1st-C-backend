const threadsDao = require('../models/threads.dao');

//thread 작성
const threadUp = async (user_id, content) => {
  await threadsDao.createThread(user_id, content);
};


//thread 수정
const threadMod = async (content, id) => {
    await threadsDao.modifyThread(content, id);
};

//thread 삭제
const threadDelete = async (id) => {
    await threadsDao.deleteThread(id);
};

module.exports = { threadUp, threadMod, threadDelete};
