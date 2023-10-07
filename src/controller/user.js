const mongoose = require("mongoose");
const userCredentials = require("../models/userCredentials");

const CRUD_find = {
  retrieveOne: function () {
    return userCredentials.find({}).then((users) => {
      return users;
    });
  },
};

module.exports = CRUD_find;
