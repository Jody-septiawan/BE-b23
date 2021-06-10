const express = require('express')

const router = express.Router()

// Controllers
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

const { userProducts, addProduct, userOrders } = require('../controllers/product')

const { registrasi, login } = require('../controllers/auth')

// Middleware
const { auth } = require('../middleware/auth')

// Auth
router.post('/register', registrasi)
router.post('/login', login)

// Product
router.get('/user-products', auth, userProducts)
router.get('/user-orders',auth, userOrders)
router.post('/product', addProduct)

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