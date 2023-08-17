const { AppDataSource } = require("./data-source");

const likeSerchByUser = async (thread_id, user_id) => {
  await AppDataSource.query(
    `
      SELECT user_id, thread_id
      FROM likes 
      WHERE thread_id = ? AND user_id = ?
      ;
    `,
    [user_id, thread_id]
  );
};

const likeOnByUser = async (thread_id, user_id) => {
  await AppDataSource.query(
    `
      INSERT INTO likes (
      thread_id,
      user_id
      ) VALUES (
        ?, ?
      );
      `,
    [thread_id, user_id]
  );
};

const likeOffByUser = async (thread_id, user_id) => {
  await AppDataSource.query(
    `
      DELETE FROM likes
      WHERE thread_id = ? AND
      user_id = ?
      ;
      `,
    [thread_id, user_id]
  );
};

module.exports = { likeSerchByUser, likeOnByUser, likeOffByUser };
