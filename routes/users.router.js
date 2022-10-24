
// import
const express = require('express')
const router = express.Router()
const userDao = require('../daos/user.dao.server')
const { putInSchema } = require("../services/user.validation");

// Return all users
router.get('/', async (req, res) => {
    try {
        const users = await userDao.findAllUsers();
        res.json(users)
    } catch (err) {
        res.json({ message: err })
    }
})

// Add new user
router.post('/', async (req, res) => {
    const userBody = req.body
    try {
        await putInSchema.validateAsync(userBody)
        const savedUser = await userDao.createUser(userBody)
        res.json(savedUser)
    } catch (err) {
        res.json({ message: err })
    }
})

// Get user by id
router.get('/:userId', async (req, res) => {
    const userId = req.params.userId
    try{
        const user = await userDao.findUserById(userId)
        res.json(user)
    }catch(err){
        res.json({message:err})
    }
})

// Get user by nickname
router.get('/nickname/:nickname', async (req, res) => {
    const userNickname = req.params.nickname
    try{
        const user = await userDao.findUserByNickname(userNickname)
        res.json(user)
    }catch(err){
        res.json({message:err})
    }
})

// Delete user by id
router.delete('/:userId', async (req, res) => {
    const userId = req.params.userId
    try{
        await userDao.deleteUserById(userId)
        res.json({message:"User was deleted"})
    }catch(err){
        res.json({message:err})
    }
})

// Update user by id
router.patch('/:userId', async (req, res) => {
    const userId = req.params.userId
    const userBody = req.body
    try{
        await putInSchema.validateAsync(userBody)
        await userDao.updateUserById(userId, req.body)
        res.json({message:"User was updated"})
    }catch(err){
        res.json({message:err})
    }
})


module.exports = router;