const { Router } = require("express");
const isLoggedIn = require("../middleware/isLoggedIn");
const Content = require("../models/Content.model");
const router = require("express").Router();

router.get("/content", (req, res) => {
  Content.find({}).then((allContent) => {
    res.json(allContent);
  });
});

module.exports = router;
