const asyncHandler = require("express-async-handler");
const { User } = require("../models");

//GET all users
//GET api/users
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.json({ users });
});

//GET one user
//GET api/users/:id
const getSingleUser = async (req, res, next) => {
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

// create a new user
//POST api/users/
const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

//PUT update user
//PUT api/users/:id
const updateUser = async (req, res) => {
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

//DELETE a user
//DELETE api/users/:id
const deleteUser = async (req, res) => {
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
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
};
