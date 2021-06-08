const express = require('express')

const router = express.Router()

// Wadah router/endpoin/url

const { getData,
        getDetail,
        addData,
        updateData,
        deleteData } = require('../controllers/todo')

const { users, 
        user, 
        addUser, 
        updateUser, 
        deleteUser } = require('../controllers/user')

// User
router.get('/users', users)
router.get('/user/:id', user)
router.post('/user', addUser)
router.patch('/user/:id', updateUser)
router.delete('/user/:id', deleteUser)


// Todo
router.get('/', getData)
router.get('/data/:id', getDetail)
router.post('/data', addData)
router.patch('/data/:id', updateData)
router.delete('/data/:id', deleteData)

module.exports = router