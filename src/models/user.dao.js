const { AppDataSource } = require("./data-source");

const createUser = async (email, password, userName, profileImage, phoneNumber, birthday) => {
  await AppDataSource.query(
    `
    INSERT INTO users (
      email,
      password,
      nickname, 
      profile_image,
      phone_number,
      birthday
    ) VALUES (
      ?,
      ?,
      ?,
      ?,
      ?,
      ?
    );
    `,
    [email, password, userName, profileImage, phoneNumber, birthday]
  );
};

const getUserByEmail = async (email) => {
  const [user] = await AppDataSource.query(
    `
      SELECT id, email, password, nickname, profile_image
      FROM users  
      WHERE email = ?
    `,
    [email]
  );

  return user;
};

module.exports = { createUser, getUserByEmail };
