const { errorHandler } = require('../../middleware/errorMiddleware')
const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend
  
} = require("../../controllers/userController");

//GET all users //create a user
router.route("/").get(getUsers).post(createUser);

//GET, update, and delete user
router.route("/:id").get(getSingleUser).put(updateUser).delete(deleteUser);

//add friend to user's friend list
router.route('/:id/friends/:friendId').post(addFriend)

//delete reaction by id
router.route('/:id/friends/:friendId').delete(deleteFriend)



module.exports = router;
