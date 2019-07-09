const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router.route("/")
  .get(usersController.findAll)
  .post(usersController.create);

// Matches with "/api/users/:id"
// router
//   .route("/:id")
//   .get(usersController.findById)
//   .put(usersController.update)

// Matches with "/api/users/:username"
router
  .route("/:username")
  .get(usersController.findByUsername)
  .put(usersController.update)

// Matches with "/api/users/:id/activities"
router
  .route("/:username/activities")
  .put(usersController.addRun)

router
  .route("/:id/activites/:activityId")
  .delete(usersController.removeActivity)

module.exports = router;
