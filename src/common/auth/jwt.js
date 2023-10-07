const jwt = require("jsonwebtoken");
const env = require("../../../environment");

const jwtEncode = (userData) => {
  return jwt.sign(
    {
      exp: Math.floor(Date.now() / 1000) + 20,
      data: userData,
    },
    process.env.SECRET_KEY
  );
};

const jwtDecode = (token) => {
  return jwt.verify(token, env.SECRET_KEY);
};

module.exports = { jwtEncode, jwtDecode };
