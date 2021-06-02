const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.json("All good in here");
});

const authRoutes = require("./auth");
router.use("/auth", authRoutes);

const contentRouter = require("./myPortal");
router.use("/myPortal", contentRouter);

module.exports = router;
