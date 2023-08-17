const jwt = require("jsonwebtoken");

const checkVerifyPromise = (req, res, next) => {
  let token = req.headers.authorization;
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        reject(err);
      } else {
        resolve(user);
      }
    });
  });
};

const checkVerify = async (req, res, next) => {
  checkVerifyPromise(req, res, next).then(
    (user) => {
      res.user = user;
      next();
    },
    (error) => {
      res.user = {};
      res.render("user/signin");
    }
  );
};

const moveLogin = (req, res, next) => {
  if (res?.user?.user_id) {
    next();
  } else {
    res.render("user/signin");
  }
};

module.exports = {
  checkVerify,
  moveLogin,
};