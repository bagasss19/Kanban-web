const {Task} = require('../models')

function authorization(req,res,next) {
    let id = req.params.id
    
    Task.findByPk(id)
    .then(data =>{
        if (!data) throw {msg : "Task not found!", code : 404}
        else if (data.UserId != req.userData) throw {msg : "you're not authorized!", code : 401}
        else next()
    })
    .catch(err => {
        next(err)
    })
}

module.exports = authorization