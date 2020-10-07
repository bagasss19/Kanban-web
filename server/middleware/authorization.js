const {Todo} = require('../models')

function authorization(req,res,next) {
    let id = req.userData
    
    Todo.findByPk(id)
    .then(data =>{
        if (!data) throw {msg : "todo not found!", code : 404}
        else if (data.id != req.userData) throw {msg : "you're not authorized!", code : 401}
        else next()
    })
    .catch(err => {
        next(err)
    })
}

module.exports = authorization