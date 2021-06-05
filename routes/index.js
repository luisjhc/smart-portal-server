const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.json("All good in here");
});

const authRoutes = require("./auth");
router.use("/auth", authRoutes);

// My Portal Route 👇
const contentRoutes = require("./myPortal");
router.use("/myPortal", contentRoutes);

// My Profile Route 👇
const profileRoutes = require("./myProfile");
router.use("/myProfile", profileRoutes);

module.exports = router;
