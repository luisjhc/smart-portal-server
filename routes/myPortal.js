const { Router, response } = require("express");
const isLoggedIn = require("../middleware/isLoggedIn");
const Content = require("../models/Content.model");
const router = require("express").Router();

router.get("/content", isLoggedIn, (req, res) => {
  Content.find({}).then((allContent) => {
    res.json(allContent);
  });
});

module.exports = router;
