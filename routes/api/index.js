const router = require("express").Router();
const feedRoutes = require("./feed");
const userRoutes = require("./user");
const memeRoutes = require("./meme");
const webcamphoto = require("./webcamphoto");
const emailRoutes = require("./email");

// Book routes
router.use("/feed", feedRoutes);
router.use("/user", userRoutes);
router.use("/meme", memeRoutes);
router.use("/images", webcamphoto);
router.use("/email", emailRoutes);

 
module.exports = router;
