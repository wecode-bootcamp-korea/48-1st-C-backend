const jwt = require("jsonwebtoken");
const checkVerifyPromise = (req, res, next) => {
  //let token = req?.cookies?.token || req?.headers?.token;
  let token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsImVtYWlsIjoiYXRlYW1AbmF2ZXIuY29tIiwiaWF0IjoxNjkyMDA3ODA5fQ.KQhyQO9Hdd-jUbJaRwH0ar_UnW5lHDme8aR3POYrs40";
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
      next();
    }
  );
};

module.exports = {
  checkVerify,
};
