const router = require("express").Router();
const {
  getThoughts,
  getThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction
} = require("../../controllers/thoughtController");

//GET all users //create a user
router.route("/").get(getThoughts).post(createThought);

//GET, update, and delete user
router.route("/:id")
.get(getThought)
.put(updateThought)
.delete(deleteThought);

//add reaction to thought
router.route('/:id/reaction').post(addReaction)

module.exports = router;
