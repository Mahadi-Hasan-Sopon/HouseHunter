const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const hashPassword = (password) => {
  return bcrypt.hash(password, 10);
};

const checkPassword = (dbPassword, receivedPassword) => {
  return bcrypt.compare(receivedPassword, dbPassword);
};

const generateToken = (data) => {
  return jwt.sign(data, process.env.jWT_SECRET_KEY, { expiresIn: "1d" });
};

module.exports = { hashPassword, checkPassword, generateToken };
