const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/feed"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);

router.route("/login")
  .post(userController.login);

  router.route("/getPhoto")
  .post(userController.getUserFromImage)

// Matches with "/api/feed/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

  

module.exports = router;
