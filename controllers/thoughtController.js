const asyncHandler = require("express-async-handler");
const { Thought, User } = require("../models");

//GET all thoughts
//GET api/thoughts
const getThoughts = asyncHandler(async (req, res) => {
  const thoughts = await Thought.find();
  res.json({ thoughts });
});

//get a single thought
//GET api/thoughts/:id
const getThought = async (req, res, next) => {
  try {
    const thought = await Thought.findOne({ _id: req.params.id }).select("-__v");
    if (!thought) {
      return res.status(404).json({ message: "No thought with that id" });
    }
    res.json(thought)
  } catch (err) {
    next(err)
  }
};

// create a new thought
//POST api/thoughts/
const createThought = async (req, res) => {
  try {
    const thought = await Thought.create(req.body);
    //get user associated with the thought
    const user = await User.findOneAndUpdate(
      { _id: req.body.userId },
      { $push: { thoughts: thought._id } },
      { new: true }
    )
    if (!user) {
      throw new Error('User not found')
    }
    res.json(thought);
  } catch (err) {
    res.status(500).json(err);
  }
};

//PUT update a thought
//PUT api/thoughts/:id
const updateThought = async (req, res) => {
  try {
    const updateThought = await Thought.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    if (!updateThought) {
      res.status(404).json({ message: "No thought with this id" });
    }
    res.json(updateThought);
  } catch (err) {
    res.status(500).json(err);
  }
};

//DELETE a thought
//DELETE api/thoughts/:id
const deleteThought = async (req, res) => {
  try {
    const deleteThought = await Thought.findOneAndRemove({ _id: req.params.id })
    if (!deleteThought) {
      return res.status(404).json({ message: "No thought with that id" })
    }
    res.json({ message: 'thought successfully', deleteThought });
  } catch (err) {
    res.status(500).json(err);
  }

};
//Add reaction to a thought
const addReaction = async (req, res) => {
  try {
    const thought = await Thought.findOneAndUpdate(
      { _id: req.params.id },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    );
    if (!thought) {
      return res.status(404).json({ message: 'No thought with that id' })
    }
    const { reactions } = thought;
    res.json({
      message: 'Reaction added successfully',
      reactions: reactions,
    });
  } catch (err) {
    res.status(500).json(err)
  }
}

//Delete a reaction
const deleteReaction = async (req, res) => {
  try {
    const thought = await Thought.findOneAndUpdate(
      { _id: req.params.id },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { runValidators: true, new: true }
    );
    if (!thought) {
      return res.status(404).json({ message: 'No thought with that id' })
    }
    res.json(thought)
  } catch (err) {
    res.status(500).json(err);
  }
}

module.exports = {
  getThoughts,
  getThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction
};
