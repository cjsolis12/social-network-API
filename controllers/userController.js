const asyncHandler = require('express-async-handler')
const { User, Thought } = require('../models')

//GET all users
//GET api/users
const getUsers = asyncHandler(async(req, res) => {
  const users = await User.find();
  res.json({ users });
});

//GET one user
//GET api/users/:id
const getSingleUser = async (req, res) => {
  res.json({ message: "testing controller function for one user" });
};

// create a new user
//POST api/users/
const createUser = async (req, res) => {
  try{
    const user = await User.create(req.body);
    res.json(user)
  } catch (err){
    res.status(500).json(err);
  }
};

//PUT update user
//PUT api/users/:id
const updateUser = asyncHandler(async (req, res) => {
  res.json({ message: `updated: ${req.params.id}` });
});

//DELETE a user
//DELETE api/users/:id
const deleteUser = asyncHandler(async (req, res) => {
  res.json({ message: `deleted: ${req.params.id}` });
});

module.exports = {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
};
