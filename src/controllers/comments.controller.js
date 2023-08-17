const commentsService = require("../services/comments.service");

const commentCreate = async (req, res) => {
    try {
        const { thread_id, content} = req.body;

        await commentsService.commentCreate(thread_id, res.user.user_id, content);

        res.status(201).json({ message: "Comment created successfully" });
    } catch (err) {
        res.status(err.status || 400).json({ message: err.message });
    }
};

const commentList = async (req, res) => {
    const user_id = res.user.user_id;
    try {
        const commendListShow = await commentsService.commentList(user_id);
        

        res.status(200).json(commendListShow);
    } catch (err) {
        res.status(err.statusCode || 400).json({ message: err.message });
    }
};

module.exports = { 
    commentCreate,
    commentList
};