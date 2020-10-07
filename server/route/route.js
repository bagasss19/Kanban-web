const route = require('express').Router()
const User = require('../controller/user')


route.post('/register', User.register)
route.post('/login',User.login)
route.post('/googlelogin',User.googleSign )

module.exports = route