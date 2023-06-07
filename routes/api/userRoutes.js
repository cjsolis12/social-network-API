const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../../controllers/userController");

//GET all users //create a user
router.route("/").get(getUsers).post(createUser);

//GET, update, and delete user
router.route("/:id").get(getSingleUser).put(updateUser).delete(deleteUser);

module.exports = router;
