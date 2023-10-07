const dotenv = require("dotenv");
dotenv.config();

module.exports.default = {
  PORT: process.env.PORT,
  DB_HOST_PORT: process.env.DB_HOST_PORT,
  DB_NAME: process.env.DB_NAME,

  DB_PARENT: process.env.DB_PARENT,
  DB_PARENT_PASS: process.env.DB_PARENT_PASS,

  SECRET_KEY: process.env.SECRET_KEY,
};
