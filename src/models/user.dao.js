const { AppDataSource } = require("./data-source");

const createUser = async (
  email,
  password,
  nickname,
  profile_image,
  phone_number,
  birthday
) => {
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
    [email, password, nickname, profile_image, phone_number, birthday]
  );
};

const getUserByEmail = async (email) => {
  const [user] = await AppDataSource.query(
    `
      SELECT *
      FROM users u
      WHERE u.email = ?
    `,
    [email]
  );

  return user;
};

module.exports = { createUser, getUserByEmail };
