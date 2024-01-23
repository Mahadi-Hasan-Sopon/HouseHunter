const bcrypt = require("bcrypt");

const hashPassword = (password) => {
  return bcrypt.hash(password, 10);
};

const checkPassword = (dbPassword, receivedPassword) => {
  return bcrypt.compare(receivedPassword, dbPassword);
};

module.exports = { hashPassword, checkPassword };
