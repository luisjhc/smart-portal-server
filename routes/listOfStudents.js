const router = require("express").Router();
const isLoggedIn = require("../middleware/isLoggedIn");
const User = require("../models/User.model");

// List Of Students Page
router.get("/", isLoggedIn, (req, res) => {
  User.find({})
    .then((allStudents) => {
      res.json(allStudents);
    })
    .catch((err) => {
      console.log("err:", err);
    });
});

// Delete Student
router.delete("/:id", isLoggedIn, (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then((student) => {
      res.json({ student });
    })
    .catch((err) => {
      console.log("err:", err);
    });
});

module.exports = router;
