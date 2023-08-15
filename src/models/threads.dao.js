const { AppDataSource } = require("./data-source");

//thread 작성
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


//thread 수정
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

// thread 삭제 
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

module.exports = { createThread, modifyThread, deleteThread };