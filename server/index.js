require('dotenv').config()
const cors = require('cors')
const express = require('express')
const app = express()
const port = 3000
const task = require('./route/task')
const route = require('./route/route')
const err = require('./middleware/err')


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use('/', route)
app.use('/tasks', task)
app.use(err)

app.listen(port, _=> console.log(`jalanin port ${port}`))