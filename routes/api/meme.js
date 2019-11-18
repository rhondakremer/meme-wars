const router = require("express").Router();
const memeController = require("../../controllers/memeController");

// Matches with "/api/feed"
// router.route("/")
//   .get(userController.findAll)
//   .post(userController.create);

router.route("/")
    .get(memeController.findAll)
    .post(memeController.create);

router.route("/:imageOf")
    .get(memeController.findAllOfMe)
// Matches with "/api/feed/:id"
// router
//   .route("/:id")
//   .get(userController.findById)
//   .put(userController.update)
//   .delete(userController.remove);

module.exports = router;
