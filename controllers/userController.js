//GET all users
//GET api/users
const getUsers = (req, res) => {
  res.json({ message: "testing controller function" });
};

//GET one user
//GET api/users/:id
const getSingleUser = (req, res) => {
  res.json({ message: "testing controller function for one user" });
};

//POST a new user
//POST api/users/
const createUser = (req, res) => {
  res.json({ message: "created a new user" });
};

//PUT update user
//PUT api/users/:id
const updateUser = (req, res) => {
  res.json({ message: `updated: ${req.params.id}` });
};

//DELETE a user
//DELETE api/users/:id
const deleteUser = (req, res) => {
  res.json({ message: `deleted: ${req.params.id}` });
};

module.exports = {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
};
