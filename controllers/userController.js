const asyncHandler = require('express-async-handler')

//GET all users
//GET api/users
const getUsers = asyncHandler(async(req, res) => {
  res.json({ message: "testing controller function" });
});

//GET one user
//GET api/users/:id
const getSingleUser = asyncHandler(async (req, res) => {
  res.json({ message: "testing controller function for one user" });
});

// create a new user
//POST api/users/
const createUser = asyncHandler(async (req, res) => {
    //add body for username and email
    if(!req.body.username){
        res.status(400).json({ message: "missing info"})
    }
  res.json({ message: "created a new user" });
});

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
