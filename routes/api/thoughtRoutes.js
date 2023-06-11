const router = require("express").Router();
const {
  getThoughts,
  getThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction
} = require("../../controllers/thoughtController");

//GET all users //create a thought
router.route("/").get(getThoughts).post(createThought);

//GET, update, and delete a thought
router.route("/:id")
.get(getThought)
.put(updateThought)
.delete(deleteThought);

//add reaction to thought
router.route('/:id/reaction').post(addReaction)

//delete reaction by id
router.route('/:id/reaction/:reactionId').delete(deleteReaction)

module.exports = router;
