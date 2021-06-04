const router = require("express").Router();
const isLoggedIn = require("../middleware/isLoggedIn");
const Content = require("../models/Content.model");

const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const saltRounds = 10;
const User = require("../models/User.model");

// Content (classes) Page
router.get("/content", isLoggedIn, (req, res) => {
  Content.find({}).then((allContent) => {
    res.json(allContent);
  });
});

// Create Student Page
router.post("/createStudent", isLoggedIn, (req, res) => {
  const { username, password, email } = req.body;

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

    return bcryp
      .genSalt(saltRounds)
      .then((salt) => bcrypt.hash(password, salt))
      .then((hashedPassword) => {
        return User.create({
          username,
          password: hashedPassword,
          email,
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

// List Of Students Page
router.get("/students", isLoggedIn, (req, res) => {
  User.find({}).then((allStudents) => {
    res.json(allStudents);
  });
});

module.exports = router;
