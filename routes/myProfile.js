const router = require("express").Router();
const User = require("../models/User.model");
const isLoggedIn = require("../middleware/isLoggedIn");

router.put(`/update`, isLoggedIn, (req, res) => {
  // router.put(`/update`, (req, res) => {

  const { firstName, lastName, username, password, email } = req.body;

  if (password?.length < 8) {
    return res.status(400).json({
      errorMessage: "Your password needs to be at least 8 characters long.",
    });
  }

  User.find({ $or: [{ username }, { email }] }).then((allUsers) => {
    const allNotMe = allUsers.filter(
      (eachUser) => eachUser._id.toString() !== req.user._id.toString()
    );
    if (allNotMe.length) {
      // OPPSIE, WE CAN'T UPDATE
      return res.status(400).json({
        errorMessage: "Username or email is already taken.",
      });
    }

    User.findByIdAndUpdate(
      req.user._id,
      { firstName, lastName, email, username },
      { new: true }
    ).then((newFabulousUser) => {
      res.json({ user: newFabulousUser });
    });
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
      res.json({ picFromServer: profilePic });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
