const router = require("express").Router();
const feedRoutes = require("./feed");
const userRoutes = require("./user");
const memeRoutes = require("./meme");

// Book routes
router.use("/feed", feedRoutes);
router.use("/user", userRoutes);
router.use("/meme", memeRoutes);
 
module.exports = router;
