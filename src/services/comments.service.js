const commentsDao = require("../models/comments.dao");

const commentCreate = async (thread_id, user_id, content) => {
    await commentsDao.createComment(thread_id, user_id, content);
};

const commentList = async (user_id) => {
    return await commentsDao.listComments(user_id);
};

module.exports = {
    commentCreate,
    commentList
};