const { Task } = require('../models')


class Controller {
    static read (req,res,next) {
        Task.findAll({
            where : {
                UserId : req.userData
            },
            order : [['id', 'ASC']]
        })
        .then(data => {
            res.status(200).json({data})
        })
        .catch(err => {
            console.log(err);
            next(err)
        })
    }

    static readId(req,res,next) {
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
        })
    }

    static add (req,res,next) {
       req.body.UserId = (req.userData); 
        Task.create(req.body)
        .then(data => {
            res.status(201).json({data})
        })
        .catch(err => {
            next(err)
        })
    }

    static editPut (req,res,next) {
        Task.update(req.body, {
            where : {
                id : req.params.id
            }
        })
        .then(data => {
            res.status(200).json({data})
        })
        .catch(err => {
            next(err)
        })
    }

    static editPatch (req,res,next) {
        Task.update(
            { status: true},
            { where: { id: req.params.id } })
        .then(data => {
            res.status(200).json({data})
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