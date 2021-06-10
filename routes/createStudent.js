const router = require("express").Router();
const isLoggedIn = require("../middleware/isLoggedIn");
const User = require("../models/User.model");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const saltRounds = 10;
const sendEmail = require("../utils/sendEmail");

// Create Student Page
router.post("/", isLoggedIn, (req, res) => {
  const { firstName, lastName, username, password, email, level } = req.body;

  if (!username || !email) {
    return res.status(400).json({ errorMessage: "Please provide a username." });
  }

  if (password.length < 8) {
    return res.status(400).json({
      errorMessage: "Your password needs to be at least 8 characters long.",
    });
  }

  User.findOne({ $or: [{ username }, { email }] }).then((found) => {
    if (found) {
      return res
        .status(400)
        .json({ errorMessage: "Username or email already taken" });
    }

    return bcrypt
      .genSalt(saltRounds)
      .then((salt) => bcrypt.hash(password, salt))
      .then((hashedPassword) => {
        return User.create({
          firstName,
          lastName,
          username,
          password: hashedPassword,
          email,
          level,
        });
      })
      .then((newUser) => {
        sendEmail(newUser, password).then((sentEmail) => {
          res.json({ newUser });
        });
      })
      .catch((error) => {
        if (error instanceof mongoose.Error.ValidationError) {
          return res.status(400).json({ errorMessage: error.message });
        }
        if (error.code === 11000) {
          return res.status(400).json({
            errorMessage:
              "Username need to be unique. The username you chose is already in use.",
          });
        }
        return res.status(500).json({ errorMessage: error.message });
      });
  });
});

module.exports = router;
