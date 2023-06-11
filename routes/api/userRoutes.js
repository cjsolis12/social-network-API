const { errorHandler } = require('../../middleware/errorMiddleware')
const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend
  
} = require("../../controllers/userController");

//GET all users //create a user
router.route("/").get(getUsers).post(createUser);

//GET, update, and delete user
router.route("/:id").get(getSingleUser).put(updateUser).delete(deleteUser);

//add friend to user's friend list
router.route('/:id/friends/:friendId').post(addFriend)


module.exports = router;
