const router = require('express').Router();
const { getUsers } = require('../../controllers/userController')


//GET all users
router.get('/', getUsers)

//GET one user
router.get('/',(req,res)=>{
    res.json({ message: "great work"})
})

//Create a user
router.post('/',(req,res)=>{
    res.json({ message: "great work"})
})

//Update a User
router.put('/:id',(req,res)=>{
    res.json({ message: `update user ${req.params.id}`})
})

//Delete a user
router.delete('/:id',(req,res)=>{
    res.json({ message: `delete user ${req.params.id}`})
})

module.exports= router