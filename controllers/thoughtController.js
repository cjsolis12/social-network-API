const asyncHandler = require("express-async-handler");
const { Thought } = require("../models");

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
      const user = await User.findOne({ _id: req.params.id }).select("-__v");
      if (!user) {
        return res.status(404).json({ message: "No user with that id" });
      }
      res.json(user)
    } catch(err) {
      next(err)
    }
  };
  
  // create a new thought
  //POST api/thoughts/
  const createThought = async (req, res) => {
    try {
      const thought = await Thought.create(req.body);
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  };
  
  //PUT update a thought
  //PUT api/thoughts/:id
  const updateThought = async (req, res) => {
    try {
      const updatedUser = await User.findOneAndUpdate(
        { _id: req.params.userId },
        req.body,
        { new: true }
      );
  
      if (!updatedUser) {
        res.status(404).json({ message: "No user with this id" });
      }
      res.json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  };
  
  //DELETE a thought
  //DELETE api/thoughts/:id
  const deleteThought = async (req, res) => {
    try{
      const deleteUser = await User.findOneAndRemove({ _id:req.params.id})
      if(!deleteUser){
        return res.status(404).json({ message: "No user with that id"})
      }
    }catch(err) {
        res.status(500).json(err);
    }
    
  };
  
  module.exports = {
    getThoughts,
    getThought,
    createThought,
    updateThought,
    deleteThought,
  };
  