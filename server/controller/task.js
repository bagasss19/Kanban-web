const { Task, User } = require('../models')


class Controller {
    static read (req,res,next) {
        Task.findAll({
            order : [['id', 'ASC']],
            include : [User]
        })
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            console.log(err);
            next(err)
        })
    }

    static readId(req,res,next) {
        console.log(req.params.id);
        Task.findOne({
            where : {
                id : req.params.id,
                UserId : req.userData
            }
        })
        .then(data => {
            res.status(200).json({data})
        })
        .catch(err => {
            next(err)
            console.log(err);
        })
    }

    static add (req,res,next) {
       req.body.UserId = (req.userData); 
        Task.create(req.body)
        .then(data => {
            res.status(201).json(data)
        })
        .catch(err => {
            next(err)
        })
    }

    static edit (req,res,next) {
        Task.update(req.body, {
            where : {
                id : req.params.id
            },
            returning : true
        })
        .then(data => {
            res.status(200).json(data[1])
        })
        .catch(err => {
            next(err)
        })
    }

    static delete (req,res,next) {
        Task.destroy({
            where : {
                id : req.params.id
            }
        })
        .then(data => {
            res.status(200).json(`Task success to delete`)
        })
        .catch(err => {
            next(err)
        })
    }
}

module.exports =  Controller