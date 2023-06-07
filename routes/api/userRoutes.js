const router = require('express').Router();



//GET all users
router.get('/',(req,res)=>{
    res.json({ message: "great work"})
})

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