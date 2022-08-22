const express = require('express')
const UserRoute = express.Router()
const {userLogin } = require('../controllers/user/user')

UserRoute.post('/login', userLogin)

module.exports = UserRoute;