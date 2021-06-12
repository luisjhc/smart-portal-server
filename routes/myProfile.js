const router = require("express").Router();
const User = require("../models/User.model");
const isLoggedIn = require("../middleware/isLoggedIn");

const bcrypt = require("bcryptjs");
const saltRounds = 10;

// UPDATE PROFILE  👇
router.put(`/update`, isLoggedIn, (req, res) => {
  // router.put(`/update`, (req, res) => {

  const { firstName, lastName, username, email } = req.body;

  User.find({ $or: [{ username }, { email }] }).then((allUsers) => {
    const allNotMe = allUsers.filter(
      (eachUser) => eachUser._id.toString() !== req.user._id.toString()
    );
    if (allNotMe.length) {
      // OPPSIE, WE CAN'T UPDATE
      return res.status(400).json({
        errorMessage: "Username or email is already taken 😱",
      });
    }

    User.findByIdAndUpdate(
      req.user._id,
      { firstName, lastName, email, username },
      { new: true }
    ).then((newFabulousUser) => {
      res
        .json({
          user: newFabulousUser,
          message: "Yor Profile was successfully updated 🥳",
        })
        .catch((err) => {
          console.log(err);
        });
    });
  });
});

// UPDATE PASSWORD 👇
router.put(`/update-password`, isLoggedIn, (req, res) => {
  const { currentPassword, newPassword, confirmPassword } = req.body;

  if (newPassword?.length < 8) {
    return res.status(400).json({
      errorMessage: "Your password needs to be at least 8 characters long 😱",
    });
  }

  if (newPassword !== confirmPassword) {
    return res.status(400).json({
      errorMessage: "Your password needs to be identical 😱",
    });
  }

  bcrypt
    .compare(currentPassword, req.user.password)
    .then((isSamePassword) => {
      if (!isSamePassword) {
        console.log("is not your password");
        return res.status(400).json({
          errorMessage: "is not you password 😱",
        });
      }
      return bcrypt
        .genSalt(saltRounds)
        .then((salt) => bcrypt.hash(newPassword, salt))
        .then((hashedPassword) => {
          return User.findByIdAndUpdate(
            req.user._id,
            { password: hashedPassword },
            { new: true }
          );
        })
        .then((updatedUser) => {
          console.log("user", updatedUser);
          res.json({
            user: updatedUser,
            message: "Yor Password was successfully updated 🥳",
          });
        });
    })
    .catch((err) => {
      console.log("err:", err);
      res.status(500).json({ errorMessage: err.message });
    });
});

// UPDATE PROFILE PIC 👇
const upload = require("../middleware/cloudinary");

router.post("/uploadPicture/:id", upload.single("profilePic"), (req, res) => {
  console.log(req);
  const profilePic = req.file.path;
  const id = req.params.id;

  User.findByIdAndUpdate(id, { profilePic })
    .then(() => {
      res.json({
        picFromServer: profilePic,
        message: "Yor Profile Picture was successfully updated 🥳",
      });
    })
    .catch((err) => {
      console.log(err.message);
    });
});

module.exports = router;
