const router = require('express').Router();
const { 
    getThoughts,
    getThought,
    createThought,
    updateThought,
    deleteThought,
} = require('../../controllers/thoughtController')


//GET all users //create a user
router.route("/").get(getThoughts).post(createThought);

//GET, update, and delete user
router.route("/:id").get(getThought).put(updateThought).delete(deleteThought);

module.exports = router;
