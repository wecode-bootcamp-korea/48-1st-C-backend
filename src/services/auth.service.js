const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const userDao = require('../models/user.dao');
const { validateEmail } = require('../utils/validators');

const signUp = async (email, password, userName, profileImage, phoneNumber, birthday) => {
  validateEmail(email);

  const user = await userDao.getUserByEmail(email);

  if (user) {
    const err = new Error('duplicated email');
    err.statusCode = 400;
    throw err;
  }

  if (!userName) {
    defalutUserName = process.env.NONAME;
  }else{
    defalutUserName = userName;
  }

  if (!profileImage) {
    defalutProfileImage = process.env.NOIMAGE;
  }else {
    defalutProfileImage = profileImage;
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  await userDao.createUser(email, hashedPassword, defalutUserName, defalutProfileImage, phoneNumber, birthday);
};

const signIn = async (email, password) => {
  const user = await userDao.getUserByEmail(email);

  if (!user) {
    const err = new Error('specified user does not exist');
    err.statusCode = 404;
    throw err;
  }

  const result = await bcrypt.compare(password, user.password);

  if (!result) {
    const err = new Error('invalid password');
    err.statusCode = 401;
    throw err;
  }

  return jwt.sign(
    {
      user_id: user.id
    },
    process.env.JWT_SECRET
  );
};



module.exports = { signUp, signIn };
