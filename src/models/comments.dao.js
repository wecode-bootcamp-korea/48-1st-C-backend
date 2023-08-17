const { AppDataSource } = require("./data-source");

const createComment= async (thread_id, user_id, content) => {
    await AppDataSource.query(
        `
        INSERT INTO comments (
            thread_id,
            user_id,
            content
        ) VALUES (
            ?, ?, ?
        );
        `,
        [thread_id, user_id, content]
    );
};

const listComments = async (user_id) => {
    const commentlist = await AppDataSource.query(
        `
        SELECT c.id AS commentId,
        c.thread_id AS threadId,
        u.nickname AS userName,
        u.profile_image AS profileImage,
        c.content AS comment,
        CASE WHEN (c.user_id=${user_id})
        THEN 'true' ELSE 'false'
        END AS isMyReply,
        c.created_at
        FROM comments c 
        LEFT JOIN users u 
        ON c.user_id = u.id;
        `
    );
    return commentlist;
};


module.exports = { createComment, listComments};