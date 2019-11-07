const router = require("express").Router();
const feedRoutes = require("./feed");
const userRoutes = require("./user");

// Book routes
router.use("/feed", feedRoutes);
router.use("/user", userRoutes)
 
module.exports = router;
