const { AppDataSource } = require("./data-source");

const setThread = async (user_id) => {
  const test = await AppDataSource.query(
    `
    SELECT nickname, profile_image 
    FROM users 
    WHERE id = ?
    ;
    `,
    [user_id]
  );
  return test;
};

const createThread = async (user_id, content) => {
  await AppDataSource.query(
    `
    INSERT INTO threads (
      user_id,
      content
    ) VALUES (
      ?,
      ?
    );
    `,
    [user_id, content]
  );
};

const modifyThread = async (content, id) => {
  await AppDataSource.query(
    `
    UPDATE threads 
     SET 
       content = ?
     WHERE 
        id= ? 
       ;
    `,
    [content, id]
  );
};

const deleteThread = async (id) => {
  await AppDataSource.query(
    `
    DELETE FROM threads th
    WHERE th.id = ?
    ;
    `,
    [id]
  );
};

const listThread = async () => {
  const threadlist = await AppDataSource.query(
    `
    SELECT t.id AS postId, 
    u.id AS userId, 
    u.nickname AS userName, 
    u.profile_image AS profileImage, 
    t.content,
    CASE
      WHEN (l.id IS NOT NULL) THEN 'true' 
        ELSE 'false'
    END
    AS isLiked,
    ifnull(c.likeCount,0) AS likeCount,
    t.update_at as createdAt
    FROM threads t LEFT JOIN users u ON t.user_id = u.id
    LEFT JOIN likes l ON l.thread_id = t.id AND l.user_id = 1
    LEFT JOIN (SELECT COUNT(thread_id) AS likeCount, thread_id FROM likes GROUP BY thread_id) c ON c.thread_id = t.id 
    ORDER BY t.id DESC
    `
  );
  return threadlist;
};

module.exports = {
  setThread,
  createThread,
  modifyThread,
  deleteThread,
  listThread,
};
