const router = require("express").Router();
const feedRoutes = require("./feed");
const userRoutes = require("./user");
const memeRoutes = require("./meme");
const emailRoutes = require("./email");

// Book routes
router.use("/feed", feedRoutes);
router.use("/user", userRoutes);
router.use("/meme", memeRoutes);
router.use("/email", emailRoutes);
 
module.exports = router;
