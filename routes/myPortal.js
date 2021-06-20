const router = require("express").Router();
const isLoggedIn = require("../middleware/isLoggedIn");
const Content = require("../models/Content.model");
const Exercises = require("../models/Exercises.model");

// Content (classes)
router.get("/", isLoggedIn, (req, res) => {
  Content.find({}).then((allContent) => {
    res.json(allContent);
  });
});

// SingleClass Page for student and teacher
router.get("/:singleClass", isLoggedIn, (req, res) => {
  // console.log(req.params.singleClass);
  // console.log(req.headers.moms);
  Content.findById(req.params.singleClass)
    .then((singleClass) => {
      res.json(singleClass);
      //console.log("singleClass:", singleClass);
    })
    .catch((err) => {
      // console.log("err:", err);
      res.status(500).json("something");
    });
});

// Exercises
router.get("/exercise/:exercise", isLoggedIn, (req, res) => {
  Content.findById(req.params.exercise)
    .then((singleExercise) => {
      res.json(singleExercise);
      //console.log("singleExercise:", singleExercise);
    })
    .catch((err) => {
      console.log("err:", err);
      res.status(500).json(true);
    });
});

module.exports = router;
