const router = require("express").Router();
const feedRoutes = require("./feed");

// Book routes
router.use("/feed", feedRoutes);

module.exports = router;
