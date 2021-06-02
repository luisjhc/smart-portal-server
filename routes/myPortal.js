const { Router } = require("express");
const isLoggedIn = require("../middleware/isLoggedIn");
const Content = require("../models/Content.model");

const router = Router();

router.get("/", (req, res) => {
  Content.find({}).then((allContent) => {
    res.json(allContent);
  });
});

module.exports = router;
