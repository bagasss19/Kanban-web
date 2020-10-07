const route = require('express').Router()
const Task = require('../controller/task')
const authentication = require('../middleware/authentication')
const authorization = require('../middleware/authorization')

route.use(authentication)
route.get('/', Task.read)
route.post('/',Task.add)
route.get('/:id',authorization,Task.readId)
route.put('/:id',authorization,Task.edit)
route.delete('/:id',authorization,Task.delete)

module.exports = route